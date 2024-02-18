<template>
  <div>leetcode233</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    let n = 3184191;
    // let m = n;
    let arr = [0, 1, 20, 300, 4000, 50000, 600000, 7000000, 80000000, 900000000]
    let weiList = [];
    let total = 0;
    let i = 0;
    while(n > 0) {
      let wei = parseInt(n % 10);
      console.log('wei :>> ', wei, i);
      if (wei != 0) {
        let oneNum = wei * arr[i] + (
          wei != 1 
            ? Math.pow(10, i) 
            : weiList.reduce((sum, val, index) => sum += val * Math.pow(10, index), 1)
          )
        console.log('oneNum :>> ', oneNum);
        total += oneNum
      }
      weiList.push(wei);
      n = parseInt(n / 10);
      i ++;
    }
    console.log('total :>> ', total);
  },
  methods: {},
};
</script>

<style>
</style>