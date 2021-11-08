function isNIL(x) {
    return x.key == 'nil'
}

import { BinarySearchTree, BinarySearchTreeNode } from "./binary-search-tree.js"

const COLOR = {
    RED: 'red',
    BLACK: 'black',
}

class RedBlackTreeNode extends BinarySearchTreeNode {
    constructor(key, color, parent = null, left = null, right = null) {
        super(key, parent, left, right)
        this.color = color // 多了一个颜色属性 black/red
        this.originColor = '' // 仅删除时使用
    }
}
// 红黑树，一种二叉搜索树的平衡树
class RedBlackTree extends BinarySearchTree {
    constructor() {
        super()
        // this.nil = new RedBlackTreeNode('nil', COLOR.BLACK) // 哨兵（所有叶节点的终点）颜色为black，key为nil
        this.T.root = new RedBlackTreeNode('nil', COLOR.BLACK)
    }
    /* insert start */
    // 左旋 
    leftRotate(x) {
        let y = x.right
        // turn y.left to x.right
        x.right = y.left
        if (!isNIL(y.left)) {
            y.left.parent = x
        }
        // link x's parent to y
        y.parent = x.parent
        if (isNIL(x.parent)) {
            this.T.root = y
        } else if (x == x.parent.left) {
            x.parent.left = y
        } else {
            x.parent.right = y
        }
        // put x on y's left
        y.left = x
        x.parent = y
    }
    // 右旋（类推）
    rightRotate(x) {
        let y = x.left
        x.left = y.right
        if (!isNIL(y.right)) {
            y.right.parent = x
        }
        y.parent = x.parent
        if (isNIL(x.parent)) {
            this.T.root = y
        } else if (x == x.parent.left) {
            x.parent.left = y
        } else {
            x.parent.right = y
        }
        y.right = x
        x.parent = y
    }
    // 插入节点
    rbInsert(z) {
        let y = new RedBlackTreeNode('nil', COLOR.BLACK)
        let x = this.T.root
        while(!isNIL(x)) {
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
        z.left = new RedBlackTreeNode('nil', COLOR.BLACK, z)
        z.right = new RedBlackTreeNode('nil', COLOR.BLACK, z)
        z.color = COLOR.RED
        this.rbInsertFixup(z)
    }
    // 插入后恢复红黑树的性质
    rbInsertFixup(z) {
        while(z.parent.color == COLOR.RED) {
            if (z.parent == z.parent.parent.left) {
                // z 的父节点为左节点
                let y = z.parent.parent.right
                if (y.color == COLOR.RED) {
                    // 情况 1
                    z.parent.color = COLOR.BLACK
                    y.color = COLOR.BLACK
                    z.parent.parent.color = COLOR.RED
                    z = z.parent.parent
                } else {
                    if (z == z.parent.right) {
                        // 情况 2
                        z = z.parent
                        this.leftRotate(z)
                    }
                    // 情况 3
                    z.parent.color = COLOR.BLACK
                    z.parent.parent.color = COLOR.RED
                    this.rightRotate(z.parent.parent)
                }
            } else {
                // z 的父节点为右节点
                let y = z.parent.parent.left
                if (y.color == COLOR.RED) {
                    z.parent.color = COLOR.BLACK
                    y.color = COLOR.BLACK
                    z.parent.parent.color = COLOR.RED
                    z = z.parent.parent
                } else {
                    if (z == z.parent.left) {
                        z = z.parent
                        this.rightRotate(z)
                    }
                    z.parent.color = COLOR.BLACK
                    z.parent.parent.color = COLOR.RED
                    this.leftRotate(z.parent.parent)
                }
            }
        }
        this.T.root.color = COLOR.BLACK
    }
    /* insert end */

    // u子树替换v子树
    rbTransplant(u, v) {
        if (isNIL(u.parent)) {
            this.T.root = v
        } else if (u == u.parent.left) {
            u.parent.left = v
        } else {
            v.parent.right = v
        }
        v.parent = u.parent
    }
    // 删除节点
    rbDelete(z) {
        let x = null
        let y = z
        y.originColor = y.color
        if (isNIL(z.left)) {
            x = z.right
            this.rbTransplant(z, z.right)
        } else if (isNIL(z.right)) {
            x = z.left
            this.rbTransplant(z, z.left)
        } else {
            y = this.rbMinimum(z.right)
            y.originColor = y.color // y = 8 black
            x = y.right // x = nil
            if (y.parent == z) {
                x.parent = y
            } else {
                this.rbTransplant(y, y.right)
                y.right = z.right
                y.right.parent = y
            }
            this.rbTransplant(z, y)
            y.left = z.left
            y.left.parent = y
            y.color = z.color
        }
        if (y.originColor == COLOR.BLACK) {
            this.rbDeleteFixup(x)
        }
    }
    // 删除后恢复红黑树性质
    rbDeleteFixup(x) {
        while (x != this.T.root && x.color == COLOR.BLACK) {
            if (x == x.parent.left) {
                let w = x.parent.right
                if (w.color == COLOR.RED) {
                    // 情况 1
                    w.color = COLOR.BLACK
                    x.parent.color = COLOR.RED
                    this.leftRotate(x.parent)
                    w = x.parent.right
                }
                if (w.left.color == COLOR.BLACK && w.right.color == COLOR.BLACK) {
                    // 情况 2
                    w.color = COLOR.RED
                    x = x.parent
                } else {
                    if (w.right.color == COLOR.BLACK) {
                        // 情况 3
                        w.left.color = COLOR.BLACK
                        w.color = COLOR.RED
                        this.rightRotate(w)
                        w = x.parent.right
                    }
                    // 情况 4
                    w.color = x.parent.color
                    x.parent.color = COLOR.BLACK
                    w.right.color = COLOR.BLACK
                    this.leftRotate(x.parent)
                    x = this.T.root
                }
            } else {
                // ???
                let w = x.parent.left
                if (w.color == COLOR.RED) {
                    w.color = COLOR.BLACK
                    x.parent.color = COLOR.RED
                    this.rightRotate(x.parent)
                    w = x.parent.left
                }
                if (w.left.color == COLOR.BLACK && w.right.color == COLOR.BLACK) {
                    // 情况 2
                    w.color = COLOR.RED
                    x = x.parent
                } else {
                    if (w.left.color == COLOR.BLACK) {
                        // 情况 3
                        w.left.color = COLOR.BLACK
                        w.color = COLOR.RED
                        this.leftRotate(w)
                        w = x.parent.left
                    }
                    // 情况 4
                    w.color = x.parent.color
                    x.parent.color = COLOR.BLACK
                    w.left.color = COLOR.BLACK
                    this.rightRotate(x.parent)
                    x = this.T.root
                }
            }
        }
        x.color = COLOR.BLACK
    }
    // 根据key的值在树中找到对应节点（非递归版本）
    rbIterativeSearch(key) {
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
    // 
    rbMinimum(x) {
        // 找到key最小的节点
        while (!isNIL(x.left)) {
            x = x.left
        }
        return x
    }
}

let tree = new RedBlackTree()
console.log('tree :>> ', tree);
tree.rbInsert(new RedBlackTreeNode(11, COLOR.RED))
tree.rbInsert(new RedBlackTreeNode(2, COLOR.RED))
tree.rbInsert(new RedBlackTreeNode(14, COLOR.RED))
tree.rbInsert(new RedBlackTreeNode(1, COLOR.RED))
tree.rbInsert(new RedBlackTreeNode(7, COLOR.RED))
tree.rbInsert(new RedBlackTreeNode(15, COLOR.RED))
tree.rbInsert(new RedBlackTreeNode(5, COLOR.RED))
tree.rbInsert(new RedBlackTreeNode(8, COLOR.RED))
tree.rbInsert(new RedBlackTreeNode(4, COLOR.RED))
// tree.inorderWalk()
let node = tree.rbIterativeSearch(7)
tree.rbDelete(node)

export {
    RedBlackTreeNode,
    RedBlackTree
}