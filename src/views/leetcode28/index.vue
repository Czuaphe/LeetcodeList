<template>
  <div>leetcode28</div>
</template>

<script>
export default {
  name: 'leetcode28',
  created() {
    // leetcode 28
    let haystack = 'hello'
    let needle = 'll'
    let result = this.strStr(haystack, needle)
    console.log('result :>> ', result);
  },
  methods: {
    // leetcode 28
    strStr(haystack, needle) {
      let flag;
      if (needle.length == 0) return 0;
      for (let i = 0; i < haystack.length; ) {
        flag = true;
        for (let j = 0; j < needle.length; j++) {
          if (needle[j] != haystack[i + j]) {
            flag = false;
            break;
          }
        }
        if (flag) {
          return i;
        } else {
          let word = haystack[i + needle.length];
          let index = needle.lastIndexOf(word);
          if (index >= 0) {
            i += needle.length - index;
          } else {
            i += needle.length + 1;
          }
        }
      }
      return -1;
    },
  }
}
</script>

<style>

</style>