<template>
  <div>leetcode-JianzhiOffer22</div>
</template>

<script>
export default {
  name: 'leetcode-JianzhiOffer22',
  created() {
    // leetcode 剑指 Offer 22
    function ListNode(val) {
      this.val = val;
      this.next = null;
    }
    // 数组构造链表
    let array = [1, 2, 3, 4, 5]
    for (let i = 0; i < array.length; i++) {
      array[i] = new ListNode(array[i])
      if (i != 0) {
        array[i - 1].next = array[i]
      }
    }
    
    let head = array[0]
    let k = 2
    let result = this.getKthFromEnd(head, k)
    console.log('result :>> ', result)
  },
  methods: {
    // leetcode 剑指 Offer 22
    getKthFromEnd(head, k) {
      let first = head
      let second = head
      let number = 0
      while(first.next) {
        first = first.next
        if (number != (k - 1)) {
            number ++
        } else {
            second = second.next
        }
      }
      return second
    },
  }
}
</script>

<style>

</style>