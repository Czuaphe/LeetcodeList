// 《Vuejs 设计与实现》 响应性系统实现

// 设计
let data = {
    ok: true,
    text: 'hello world',
    foo: 1
}
const bucket = new WeakMap()
let activeEffect
const effectStack = []

function effect(fn) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        effectStack.push(activeEffect)
        fn()
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
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
    const effectsToRun = new Set()
    // 如果 trigger 触发执行的副作用函数与当前正在执行的副作用函数相同，则不触发执行
    effects && effects.forEach(effectFn => {
        if (effectFn != activeEffect) {
            effectsToRun.push(effectFn)
        }
    })
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
// effect(() => {
//     console.log('effect run :>> ');
//     document.body.innerText = obj.ok ? obj.text : 'not'
// })
effect(() => {
    console.log('obj.foo :>> ', obj.foo);
    obj.foo ++
    console.log('obj.foo :>> ', obj.foo);
})
// setTimeout(() => {
//     obj.text = 'hello vue3'
//     // obj.notExist = 'hello vue3'
// }, 2000)

// setTimeout(() => {
//     obj.ok = false
// }, 4000)