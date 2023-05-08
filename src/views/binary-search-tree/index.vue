<template>
  <div>binary-search-tree</div>
</template>

<script>
// binary-search-tree
import { BinarySearchTreeNode, BinarySearchTree } from './binary-search-tree'
export default {
  name: "binary-search-tree",
  created() {
    // 二叉搜索树
    let array = [15, 18, 17, 6, 20, 3, 7, 13, 2, 4, 9] // {#} -sign -i -t created
    let tree = new BinarySearchTree()
    array.forEach(item => {
      // 依次插入对应节点，生成一棵二叉搜索树
      tree.insert(new BinarySearchTreeNode(item))
    })
    // console.log('tree.T.root :>> ', tree.T.root);
    tree.inorderWalk(tree.T.root)
    let result = tree.iterativeSearch(6)
    // console.log('result :>> ', result);
    
    // eslint-disable-next-line no-unused-vars
    let next = tree.successor(result) // {#} -sign -i -t created
    // console.log('next :>> ', next);
    // console.log('max :>> ', tree.maximum(result));
    // console.log('min :>> ', tree.minimum(result));
    
    tree.delete(tree.iterativeSearch(6))
    // console.log('tree.T.root :>> ', tree.T.root);
    tree.inorderWalk(tree.T.root)
  },
  methods: {

  },
};
</script>