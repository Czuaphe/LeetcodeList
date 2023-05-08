<template>
  <div>leetcode1984</div>
</template>

<script>
export default {
  name: 'leetcode1984',
  created() {
    // leetcode 1984
    let nums = [87063,61094,44530,21297,95857,93551,9918]
    let k = 6
    let result = this.minimumDifference(nums, k)
    console.log('result :>> ', result);
  },
  methods: {
    minimumDifference: function(nums, k) {
      if (k == 1) {
        return 0
      }
      k --
      nums.sort((a, b) => a - b)
      let value = Number.MAX_SAFE_INTEGER
      // console.log('nums :>> ', nums);
      for(let i = 0; i < nums.length - k ; i ++) {
        if (value > nums[i + k] - nums[i]) {
          value = nums[i + k] - nums[i]
        }
      }
      return value
    },
  }
}
</script>

<style>

</style>