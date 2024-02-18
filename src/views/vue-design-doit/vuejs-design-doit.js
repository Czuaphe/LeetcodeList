// 《Vuejs 设计与实现》 响应性系统实现

// 设计

const bucket = new WeakMap()
let activeEffect
const effectStack = []

export function effect(fn, options = {}) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        effectStack.push(activeEffect)
        const res = fn()
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
        return res
    }
    effectFn.options = options
    effectFn.deps = []
    if (!options.lazy) {
        effectFn()
    }
    return effectFn
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
            effectsToRun.add(effectFn)
        }
    })
    effectsToRun.forEach(effectFn => {
        // 
        if (effectFn.options.scheduler) {
            effectFn.options.scheduler(effectFn)
        } else {
            effectFn()
        }
    })
    // effects && effects.forEach(fn => fn()) // 死循环
}
export function reactive(data) {
    return new Proxy(data, {
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
}
export function computed(getter) {
    let value
    let dirty = true
    const effectFn = effect(getter, {
        lazy: true,
        scheduler() {
            dirty = true
            trigger(obj, "value")
        }
    })
    const obj = {
        get value() {
            if (dirty) {
                value = effectFn()
                dirty = false
            }
            track(obj, "value")
            return value
        }
    }
    return obj
}
function traverse(value, seen = new Set()) {
    if (typeof value !== 'object' || value === null || seen.has(value)) return
    seen.add(value)
    for (const k in value) {
        traverse(value[k], seen)
    }
}
export function watch(source, cb) {
    let getter
    if (typeof source === 'function') {
        getter = source
    } else {
        getter = traverse(source)
    }
    let oldValue, newValue
    const effectFn = effect(
        () => getter(), 
        {
            lazy: true,
            scheduler() {
                newValue = effectFn()
                cb(newValue, oldValue)
                oldValue = newValue
            }
        }
    )
    oldValue = effectFn()
}
// const obj = reactive(data)
// 执行
// effect(() => {
//     console.log('effect run :>> ');
//     document.body.innerText = obj.ok ? obj.text : 'not'
// })
// effect(() => {
//     console.log('obj.foo :>> ', obj.foo);
//     // console.log('obj.foo :>> ', obj.foo);
// }, {
//     // scheduler(fn) {
//     //     setTimeout(fn)
//     // }
// })
// obj.foo ++
// obj.foo ++
// console.log('over :>> ');
// setTimeout(() => {
//     obj.text = 'hello vue3'
//     // obj.notExist = 'hello vue3'
// }, 2000)

// setTimeout(() => {
//     obj.ok = false
// }, 4000)