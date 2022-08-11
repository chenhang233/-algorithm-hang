function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
const myReverse = (head, tail) => {
  let prev = tail.next
  let p = head
  while (prev !== tail) {
    const nex = p.next
    p.next = prev
    prev = p
    p = nex
  }

  return [tail, head]
}
var reverseKGroup = function (head, k) {
  const hair = new ListNode(0)
  hair.next = head
  let pre = hair
  while (head) {
    let tail = pre
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; ++i) {
      tail = tail.next
      //   console.log(tail, 'tail')
      if (!tail) {
        return hair.next
      }
    }
    const nex = tail.next
    // console.log(nex, 'nex')
    ;[head, tail] = myReverse(head, tail)
    // 把子链表重新接回原链表
    pre.next = head
    tail.next = nex
    pre = tail
    head = tail.next
  }

  return hair.next
}
const node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)
// console.log()
reverseKGroup(node, 2)
