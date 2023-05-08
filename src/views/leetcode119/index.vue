<template>
  <div>leetcode119</div>
</template>

<script>
export default {
  name: 'leetcode119',
  created() {
    // leetcode 119
    let result = this.getRow(4);
    console.log("result :>> ", result);
  },
  methods: {
    // leetcode 119
    getRow(rowIndex) {
      let array = Array(rowIndex + 1).fill(1);
      for (let i = 1; i < array.length - 1; i++) {
        for (let j = i; j > 0; j--) {
          array[j] = array[j] + array[j - 1];
        }
      }
      return array;
    },
  }
}
</script>

<style>

</style>