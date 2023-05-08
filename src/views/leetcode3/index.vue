<template>
  <div>leetcode3</div>
</template>

<script>
export default {
  name: 'leetcode3',
  created() {
    // leetcode 3
    let s = "aub";
    let result = this.lengthOfLongestSubstring(s);
    console.log("result :>> ", result);
    console.log("currect :>> ", 3);
  },
  methods: {
    // leetcode 3
    lengthOfLongestSubstring(s) {
      if (s.length == 1) return 1;
      let l = 0, r = 0, res = 0;
      let m = new Set();
      let repeatValue = "";
      while (r < s.length) {
        const c = s[r];
        if (m.has(c)) {
          repeatValue = c;
        } else {
          m.add(c);
        }
        r++;

        while (repeatValue) {
          if (res < r - l - 1) res = r - l - 1;
          const c2 = s[l];
          if (c2 == repeatValue) {
            repeatValue = "";
          } else {
            m.delete(c2);
          }
          l++;
        }
      }
      return res < m.size ? m.size : res;
    },
  }
}
</script>

<style>

</style>