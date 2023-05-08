/**
 * 堆相关算法
 */
// 维持堆性质
function maxHeapify(A, i, heapSize = A.length) {
    let largest = -1
    // 左右结点
    let l = 2 * i
    let r = 2 * i + 1
    if (l <= heapSize && A[l - 1] > A[i - 1]) {
        largest = l
    } else {
        largest = i
    }
    if (r <= heapSize && A[r - 1] > A[largest - 1]) {
        largest = r
    }
    if (largest != i) {
        // 交换
        let temp = A[i - 1]
        A[i - 1] = A[largest - 1]
        A[largest - 1] = temp
        // 递归
        maxHeapify(A, largest, heapSize)
    }
}
// 创建堆
function buildMaxHeap(A) {
    for (let i = Math.floor(A.length / 2); i >= 1; i--) {
        maxHeapify(A, i)
    }
}
// 堆排序
function heapSort(array) {
    buildMaxHeap(array)
    console.log('array :>> ', array)
    let heapSize = array.length
    for (let i = array.length; i >= 2; i--) {

        let temp = array[i - 1]
        array[i - 1] = array[0]
        array[0] = temp

        heapSize--
        maxHeapify(array, 1, heapSize)
    }
    return array
}

export {
    maxHeapify,
    buildMaxHeap,
    heapSort
}