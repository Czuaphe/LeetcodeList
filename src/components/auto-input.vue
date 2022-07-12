<template>
  <div>
    <div class="mirror-container">
      <div class="mirror-block">
        <div ref="mirror-input" class="mirror-input" contenteditable="true">
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
// 可以随文本宽度和高度自由伸缩的input框
export default {
  name: 'AutoInput',
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  watch: {
  },
}
</script>

<style scoped>
.mirror-container {
  display: flex;
}
.mirror-block {
  margin: 10px 0;
  border: 1px solid green;
  padding: 10px;
  display: block;
  height: 100%;
}
.mirror-input {
  /* padding: 5px; */
  display: block;
  text-align: left;
  outline: none;
  min-width: 100px;
  min-height: 50px;
  height: 100%;
  /* border: 1px solid red; */
  width: fit-content;
  /* caret-color: red; */
}
</style>