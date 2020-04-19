/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxPathSum = function(root) {
  let maxSum = 0;
  maxSum = root.val;
  getMaxSum(root);

    function getMaxSum(node){
     if(node  ===  null ){ return 0};
     let leftNode = Math.max(0,getMaxSum(node.left));
     let  rightNode = Math.max(0,getMaxSum(node.right));
      maxSum = Math.max(maxSum,leftNode+rightNode+node.val);
      return Math.max(leftNode,rightNode) + node.val;
   }
     return maxSum;
  
};
