<template>
  <div>leetcode1968</div>
</template>

<script>
export default {
  name: 'leetcode1968',
  created() {
    // leetcode 1968
    let nums = [10,13,7,8,5,3]
    let result = this.rearrangeArray(nums)
    console.log('result :>> ', result);
  },
  methods: {
    // leetcode 1968
    rearrangeArray: function (nums) {
      // 每个数都
      let result = [];
      let sortNums = nums.sort((x, y) => x - y);
      let avg = Math.floor(nums.length / 2);
      for (let i = 0, j = 0, k = avg; i < nums.length; i++) {
        if (i % 2 == 0) {
          result[i] = sortNums[k];
          k++;
        } else {
          result[i] = sortNums[j];
          j++;
        }
      }
      return result;
    },
  }
}
</script>

<style>

</style>