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
    let data = {
        ok: true,
        text: 'hello world',
        foo: 1
    }
    let obj = reactive(data)
    effect(() => {
      console.log('obj.foo :>> ', obj.foo);
    })
    obj.foo ++
  },
}
</script>