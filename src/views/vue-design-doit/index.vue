<template>
  <div>vue-design-doit</div>
</template>

<script>
import { reactive, effect } from "./vuejs-design-doit.js"

export default {
  name: "VueDesignDoit",
  data() {
    return {

    }
  },
  created() {
    const jobQueue = new Set()
    const p = Promise.resolve()
    let isFlushing = false
    function flushJob() {
      if (isFlushing) return
      isFlushing = true
      p.then(() => {
        jobQueue.forEach(job => job())
      }).finally(() => {
        isFlushing = false
      })
    }
    let data = {
        ok: true,
        text: 'hello world',
        foo: 1
    }
    let obj = reactive(data)
    effect(() => {
      console.log('obj.foo :>> ', obj.foo);
    }, 
    {
      scheduler(fn) {
        jobQueue.add(fn)
        flushJob()
      }
    }
    )
    obj.foo ++
    obj.foo ++
  },
}
</script>