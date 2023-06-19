# 怎么使用Mockjs

1、npm i mockjs -D

2、在src下面新建一个mock文件夹

3、新建一个index.js文件

```javascript
import Mock from "mockjs"
Mock.mock(url, 'get', responseData)
```

4、在main.js文件调用新建的mock文件

```java script
let basePath = '/mock'

if (basePath == '/mock') {
  require('./mock/index.js')
}
```