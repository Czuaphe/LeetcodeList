
`// {#}` 就可以输出日志

- `-i` info类型的console
- `-t XXX` 添加注释
- `-sign` 显式变量名 // 123 -> a: 123 
- `-from` 在函数调用时使用，将打印两个console，分别显示参数和返回值



目前的问题：

- 形如：`function maxHeapify(A, i, heapSize = A.length) { // {#} -sign -i -t maxHeapify` 这样的注释会有问题，
- 