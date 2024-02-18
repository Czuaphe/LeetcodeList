<template>
  <div>vue-design-doit</div>
</template>

<script>
import { reactive, effect, computed, watch } from "./vuejs-design-doit.js"

export default {
  name: "VueDesignDoit",
  data() {
    return {

    }
  },
  created() {
    let data = {
        ok: true,
        text: 'hello world',
        foo: 1,
        bar: 2
    }
    let obj = reactive(data)
    // 4.7例子 调度执行
    // const jobQueue = new Set()
    // const p = Promise.resolve()
    // let isFlushing = false
    // function flushJob() {
    //   if (isFlushing) return
    //   isFlushing = true
    //   p.then(() => {
    //     jobQueue.forEach(job => job())
    //   }).finally(() => {
    //     isFlushing = false
    //   })
    // }
    // effect(() => {
    //   console.log('obj.foo :>> ', obj.foo);
    // }, 
    // {
    //   scheduler(fn) {
    //     jobQueue.add(fn)
    //     flushJob()
    //   }
    // }
    // )
    // obj.foo ++
    // obj.foo ++
    //4.8 计算属性
    const sumRes = computed(() => obj.foo + obj.bar)
    effect(() => {
      console.log('sumRes.value :>> ', sumRes.value);
    })
    watch(
      () => obj.foo,
      (newValue, oldValue) => {
        console.log('newValue, oldValue :>> ', newValue, oldValue);
      }
    )
    obj.foo ++
  },
}
</script>