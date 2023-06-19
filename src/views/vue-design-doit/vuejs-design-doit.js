// 《Vuejs 设计与实现》 响应性系统实现

// 设计
let data = {
    ok: false,
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
// eslint-disable-next-line no-unused-vars
function cleanup(effectFn) {
    
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
    effects && effects.forEach(fn => fn())
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