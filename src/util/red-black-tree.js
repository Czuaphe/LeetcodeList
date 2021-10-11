// import { isNIL } from "./util.js"

import { BinarySearchTree, BinarySearchTreeNode } from "./binary-search-tree.js"

const COLOR = {
    RED: 'red',
    BLACK: 'black',
}

class RedBlackTreeNode extends BinarySearchTreeNode {
    constructor(key, color = COLOR.BLACK) {
        super(key)
        this.color = color // 多了一个颜色属性 black/red
    }
}
// 红黑树，一种二叉搜索树的平衡树
class RedBlackTree extends BinarySearchTree {
    constructor() {
        super()
        this.nil = new RedBlackTreeNode('nil') // 哨兵（所有叶节点的终点）颜色为black，key为nil
        this.T.root = this.nil
    }
    // 左旋 
    leftRotate(x) {
        let y = x.right
        // turn y.left to x.right
        x.right = y.left
        if (y.left != this.nil) {
            y.left.parent = x
        }
        // link x's parent to y
        y.parent = x.parent
        if (x.parent == this.nil) {
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
    // 右旋
    rightRotate(x) {
        let y = x.left
        x.left = y.right
        if (y.right != this.nil) {
            y.right = x
        }
        y.parent = x.parent
        if (x.parent == this.nil) {
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
        let y = this.nil
        let x = this.T.root
        while(x != this.nil) {
            y = x
            if (z.key < x.key) {
                x = x.left
            } else {
                x = x.right
            }
        }
        z.parent = y
        if (y == this.nil) {
            this.T.root = z
        } else if (z.key < y.key) {
            y.left = z
        } else {
            y.right = z
        }
        z.left = this.nil
        z.right = this.nil
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
}

// let node = new RedBlackTreeNode('2', COLOR.RED)
// console.log('node :>> ', node);
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
tree.inorderWalk(tree.T.root);



export {
    RedBlackTreeNode,
    RedBlackTree
}