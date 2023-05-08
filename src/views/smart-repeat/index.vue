<template>
  <div>smartRepeat</div>
</template>

<script>
export default {
  name: 'smartRepeat',
  created() {
    // 字节面试题：smartRepeat
    let str = "2[1[a]3[b]2[3[c]4[d]]]"
    this.smartRepeat(str) // {#} -sign -i -from -t created
  },
  methods: {
    // 字节面试题
    smartRepeat: function (str) {
      let stack = [];
      let temp = "";
      let array = [];
      let index = -1;
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!isNaN(Number(char))) {
          let number = Number(char);
          stack.push(number);
          index++;
        } else if (char == "[") {
          stack.push(char);
        } else if (char == "]") {
          stack.pop();
          /** 字符串相乘 */
          let num = stack.pop();
          // 值为空，则结束当前层，实际值为上层字符串连接
          if (temp == "") {
            // 上层的都连起来
            temp = array[index + 1].join("");
          }
          // 得到重复的串
          let repeat = "";
          for (let j = 0; j < num; j++) {
            repeat += temp;
          }
          temp = repeat;
          // 放入对应层数组
          if (array[index] !== undefined) {
            array[index].push(temp);
          } else {
            array[index] = [temp];
          }

          temp = "";
          index--;
        } else {
          temp += char;
        }
      }
      return array[0];
    },
  }
}
</script>

<style>

</style>