<template>
  <div>leetcode 1962</div>
</template>
<script>
// leetcode 1962
import { buildMaxHeap, maxHeapify, heapSort } from "./heap";
export default {
  name: "leetcode1962",
  created() {
    let piles = [5, 4, 9];
    let k = 2;
    this.minStoneSum(piles, k); // {#} -sign -i -t created -from
    // console.log("result :>> ", result);
  },
  methods: {
    minStoneSum(piles, k) {
      // 1、暴力法
      // for (let i = 0; i < k; i++) {
      //   let maxIndex = 0;
      //   let max = piles.reduce((num1, num2, index) => {
      //     if (num1 < num2) {
      //       maxIndex = index;
      //       return num2;
      //     } else {
      //       return num1;
      //     }
      //   });
      //   piles[maxIndex] = Math.ceil(max / 2);
      //   maxIndex = 0;
      // }
      // return piles.reduce((sum, a) => sum + a);
      
      // 2、二叉堆法
      buildMaxHeap(piles)
      while(k > 0) {
        piles[0] = Math.ceil(piles[0] / 2)
        maxHeapify(piles, 1)
        k --
      }  
      return piles.reduce((sum, a) => sum + a)
    },
    heapSort() {
      // 堆排序
      let array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
      let result = heapSort(array)
      console.log('result :>> ', result)
    },
  }
};
</script>