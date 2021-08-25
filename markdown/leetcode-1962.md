# LeetCode-1962 从优先队列想到堆排序

## （二叉）堆的定义与性质

 什么是（二叉）堆？《算法导论》上说可以看成**一个近似的完全二叉树**，除了最底层，树应该是完全充满的。而且这棵树还必须满足*堆的性质*。根据堆不同的形式，堆的性质也不同。最大堆的性质是：**在任一子树中，该子树包含的所有结点的值都不大于该子树的根结点**，也就是说堆中最大元素保存在堆的根结点上。最小堆性质则相反。

 具体有堆性质的二叉树才能叫堆。也就是说堆其实是一类特别的二叉树。那为什么堆是这样拥有的性质呢？我感觉很形象，想像有一堆东西，里面的东西有大有小，你要把它们放在一个平地上，在你放的过程中，大的自然在上面，小的会落到大的间隙里面，自然会形成一个上大下小的结构。所以堆的意思就是上大下小，也就是最大堆的堆性质。

 与二叉搜索树的区别，定义上不同：堆是所有子树节点值小于根节点，二叉搜索树是左子节点值小于根节点，右子节点值大于根节点。

第二个区别：堆是近似完全二叉树，也就是它是平衡的，而二叉搜索树不是平衡的。

### 堆的性质

```javascript
//维护堆的性质
function maxHeapify(A, i) {
    let largest = -1
    // 左右结点
    let l = 2 * i
    let r = 2 * i + 1
    // 寻找三个值的最大
    if (l <= A.length && A[l - 1] > A[i - 1]) {
        largest = l
    } else {
        largest = i
    }
    if (r <= A.length && A[r - 1] > A[largest - 1]) {
        largest = r
    }
    // 需要交换，处理对子树的影响
    if (largest != i) {
        // 交换
        let temp = A[i - 1]
        A[i - 1] = A[largest - 1]
        A[largest - 1] = temp
        // 递归处理对子树的影响
        maxHeapify(A, largest)
    }
}
```

### 创建堆

```javascript
// 创建堆，把可能父结点逆序维护堆的性质
function buildMaxHeap(A) {
    for (let i = Math.floor(A.length / 2); i >= 1; i --) {
        maxHeapify(A, i)
    }
}
```

 ## （二叉）堆的应用

 ### 堆排序

 堆排序其实就是利用了堆的性质进行排序，每次都取出堆顶，也就是最大值，让剩下的节点重新构成一个最大堆，再取出当前堆的堆顶（最大值），一直取到堆只剩下2个节点。结束，排序就完成了。

 为了维护堆的性质，每次的时间复杂度为O(lgn)，排序的时间复杂度自然为O(nlgn)

```javascript
// 堆排序
heapSort(array) {
    this.buildMaxHeap(array)
    console.log('array :>> ', array)
    let heapSize = array.length
    for (let i = array.length; i >= 2; i --) {

        let temp = array[i - 1]
        array[i - 1] = array[0]
        array[0] = temp

        heapSize --
        this.maxHeapify(array, 1, heapSize)
    }
    return array
}
```

 ### 优先队列

leetcode-1962就是一道优先队列的题目。

```
给你一个整数数组 piles ，数组 下标从 0 开始 ，其中 piles[i] 表示第 i 堆石子中的石子数量。另给你一个整数 k ，请你执行下述操作 恰好 k 次：

选出任一石子堆 piles[i] ，并从中 移除 floor(piles[i] / 2) 颗石子。
注意：你可以对 同一堆 石子多次执行此操作。

返回执行 k 次操作后，剩下石子的 最小 总数。

floor(x) 为 小于 或 等于 x 的 最大 整数。（即，对 x 向下取整）。
```

每次操作都需要知道当前石子堆中数量最多的那一堆，这样才能使最后剩下的石子数量最少。与堆的性质一致。

```javascript
minStoneSum: function (piles, k) {
    // 构建堆
    buildMaxHeap(piles)
    while(k > 0) {
        // 将根节点石子数量减半
        piles[0] = Math.ceil(piles[0] / 2)
        // 重新生成新的堆
        maxHeapify(piles, 1)
        k --
    }
    return piles.reduce((sum, a) => sum + a)
}
```







