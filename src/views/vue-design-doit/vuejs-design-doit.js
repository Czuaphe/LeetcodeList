// 《Vuejs 设计与实现》 响应性系统实现

// 设计
let data = {
    ok: true,
    text: 'hello world'
}
const bucket = new WeakMap()
let activeEffect
function effect(fn) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}
function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i];
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}
function track(target, key) {
    if (!activeEffect) return target[key]
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}
function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    // 新复制一个Set，删除时就不会死循环
    const effectsToRun = new Set(effects)
    effectsToRun.forEach(effectFn => effectFn())
    // effects && effects.forEach(fn => fn()) // 死循环
}
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        trigger(target, key)
        return true // 返回true表示属性设置成功
    }
})
// 执行
effect(() => {
    console.log('effect run :>> ');
    document.body.innerText = obj.ok ? obj.text : 'not'
})
setTimeout(() => {
    obj.text = 'hello vue3'
    // obj.notExist = 'hello vue3'
}, 2000)

setTimeout(() => {
    obj.ok = false
}, 4000)