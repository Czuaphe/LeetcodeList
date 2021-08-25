import { isNIL } from "./util.js"

class RedBlackTreeNode {
    constructor(key) {
        this.key = key // 节点值
        this.parent = null // 父节点
        this.left = null // 左节点
        this.right = null // 右节点
        this.color = null // 多了一个颜色属性 black/red
    }
}

class RedBlackTree {
    constructor() {
        this.T = {
            root:  null
        }
    }
    
    leftRotate(x) {
        let y = x.right
        x.right = y.left
        if (!isNIL(y.left)) {
            y.left.parent = x
        }
        y.parent = x.parent
        if (isNIL(x.parent)) {
            this.T.root = y
        } else if (x == x.parent.left) {
            x.parent.left = y
        } else {
            x.parent.right = y
        }
        y.left = x
        x.parent = y
    }
}