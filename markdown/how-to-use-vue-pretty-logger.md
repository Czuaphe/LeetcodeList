
`// {#}` 就可以输出日志

- `-i` info类型的console
- `-t XXX` 添加注释
- `-sign` 显式变量名 // 123 -> a: 123 
- `-from` 在函数调用时使用，将打印两个console，分别显示参数和返回值
- `-time` 在函数调用时使用，将打印两个console，分别是console.time()和console.timeEnd()在函数调用前后


目前的问题：

- 形如：`function maxHeapify(A, i, heapSize = A.length) { // {#} -sign -i -t maxHeapify` 这样的注释（函数有默认值）会有问题，初步确定是vue-pretty-logger的在调用loggerParser.parseLogger方法时发生的问题