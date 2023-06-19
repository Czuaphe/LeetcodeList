# 怎么写一个webpack loader

1、首先新建一个loader.js

```javascript
/**
 * @params source 要处理的文件内容
 * */
module.exports = function (source) {
  
  // ... 文件处理逻辑
  return source;
}
```

2、合并webpack配置，在指定的文件中加载自定义loader

```javascript

```