/**
 * 回溯法(DFS)
 * 把握核心规则：
 *  - 必须是有效组合，则左、右括号一定要小于n, 且右括号的数量要一直小于或等于左括号
 *  - 针对组成的括号字符串的每一个位置字符来说，要么是左括号，要么是右括号, 具体这个位置应该是左还是右，看上面的规则而定
 *  - 所以想到，我可以递归地往每个位置放左和右括号，如果违反了规则，就回溯回去，换一个放，由此想到了回溯算法
 *  - 既然是递归，首先要先想好终止条件，依题可知，如果左右括号的数量都为n的话，即为一个答案了，终止递归，返回即可
 * 解题：left 记录已经放入的左括号的数量; right 记录右括号的数量；str 表示当前组成的字符串
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const arr = []
  const trans = (left, right, str) => {
    if (left === n && right === n) arr.push(str)
    if (left < n) trans(left + 1, right, str + '(')
    if (right < left) trans(left, right + 1, str + ')')
  }
  trans(0, 0, '')
  return arr
}
