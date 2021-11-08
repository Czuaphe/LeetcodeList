import { isNIL } from "./util.js"

class BinarySearchTreeNode {
    constructor(key, parent = null, left = null, right = null) {
        this.key = key // 节点值
        this.parent = parent // 父节点
        this.left = left // 左节点
        this.right = right // 右节点
    }
}

class BinarySearchTree {
    constructor() {
        this.T = {
            root: null
        }
    }
    // 找到key最小的节点
    minimum(x) {
        while (!isNIL(x.left)) {
            x = x.left
        }
        return x
    }
    // 找到key最大的节点
    maximum(x) {
        while (!isNIL(x.right)) {
            x = x.right
        }
        return x
    }
    // 根据key的值在树中找到对应节点（非递归版本）
    iterativeSearch(key) {
        let x = this.T.root
        while (!isNIL(x) && key != x.key) {
            if (key < x.key) {
                x = x.left
            } else {
                x = x.right
            }
        }
        return x
    }
    // 找到x的后继节点
    successor(x) {
        if (!isNIL(x.right)) {
            return this.minimum(x.right)
        }
        let y = x.parent
        while(!isNIL(y) && x == y.right) {
            x = y
            y = y.parent
        }
        return y
    }
    // 插入节点
    insert(z) {
        let x = this.T.root
        let y = null
        while (!isNIL(x)) {
            y = x
            if (z.key < x.key) {
                x = x.left
            } else {
                x = x.right
            }
        }
        z.parent = y
        if (isNIL(y)) {
            this.T.root = z
        } else if (z.key < y.key) {
            y.left = z
        } else {
            y.right = z
        }
    }
    // 替换子树
    transplant(u, v) {
        if (isNIL(u.parent)) {
            this.T.root = v
        } else if (u == u.parent.left) {
            u.parent.left = v
        } else {
            u.parent.right = v
        }
        if (!isNIL(v)) {
            v.parent = u.parent
        }
    }
    // 删除节点
    delete(z) {
        if (isNIL(z.left)) {
            this.transplant(z, z.right)
        } else if (isNIL(z.right)) {
            this.transplant(z, z.left)
        } else {
            let y = this.minimum(z.right)
            if (y.parent != z) {
                this.transplant(y, y.right)
                y.right = z.right
                y.right.parent = y
            }
            this.transplant(z, y)
            y.left = z.left
            y.left.parent = y
        }
    }
    // 中序遍历
    inorderWalk(x) {
        if (!isNIL(x)) {
            this.inorderWalk(x.left)
            console.log('key :>> ', x.key);
            this.inorderWalk(x.right)
        }
    }
}

export {
    BinarySearchTree,
    BinarySearchTreeNode
}