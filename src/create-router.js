const fs = require('fs')
const path = require('path')
const pathList = []

function traverseFolder(directory) {
  // 获取文件夹中的所有文件和子文件夹
  const files = fs.readdirSync(directory);

  // 遍历文件和子文件夹
  files.forEach(file => {
    // 获取文件或文件夹的完整路径
    const filePath = path.join(directory, file);

    // 检查文件状态
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      // 如果是文件，则处理文件
      // eslint-disable-next-line no-console
      // console.log('File:', filePath);
      // pathList.push(filePath)
    } else if (stats.isDirectory()) {
      // 如果是文件夹，则递归调用 traverseFolder 函数
      // eslint-disable-next-line no-console
      // console.log('Directory:', filePath);
      // traverseFolder(filePath);
      pathList.push(filePath) // 得到所有页面的目录名
    }
  });
}

traverseFolder(path.resolve(__dirname, './views'))
console.log('pathList :>> ', pathList);
const routerStr = pathList.map(path => {
  let index = path.lastIndexOf('\\')
  const name = path.substr(index + 1)
  return `{ path: '/${name}', component: () => import('../views/${name}') },`
})
console.log('routerStr :>> ', routerStr);
const prefixStr = 'import VueRouter from "vue-router";\n'
const suffixStr = 'const router = new VueRouter({routes});\nexport default router;'

const resultStr = prefixStr + 'const routes = [\n'
  + routerStr.join('\n')
  + '\n];\n' + suffixStr;

console.log('resultStr :>> ', resultStr);

// todo 保存到router/index.js中


