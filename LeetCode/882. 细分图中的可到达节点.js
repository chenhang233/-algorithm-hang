/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function (edges, maxMoves, n) {
  const distances = Array.from({ length: n }).fill(+Infinity)
  const reached = Array.from({ length: n }).fill(false)
  distances[0] = 0

  // 建图
  const GRAPH = Array.from({ length: n }, () =>
    Array.from({ length: n }).fill(+Infinity)
  )
  for (let [from, to, cost] of edges) {
    GRAPH[from][to] = cost + 1
    GRAPH[to][from] = cost + 1
  }

  // Dijkstra
  for (let i = 0; i < n; i++) {
    let x = -1
    for (let y = 0; y < n; y++) {
      if (!reached[y] && (x === -1 || distances[x] > distances[y])) {
        x = y
      }
    }
    reached[x] = true
    for (let y = 0; y < n; y++) {
      distances[y] = Math.min(distances[y], distances[x] + GRAPH[x][y])
    }
  }
  let res = 0
  // 如果节点i的distances大于maxMoves，则其不可抵达，修改状态为false
  for (let i = 0; i < n; i++) {
    if (distances[i] > maxMoves) {
      reached[i] = false
    } else {
      res++
    }
  }

  // 根据可以抵达的大节点计算有多少个小节点可以抵达
  for (let [from, to, cost] of edges) {
    let sum = 0
    sum += reached[from] ? maxMoves - distances[from] : 0
    sum += reached[to] ? maxMoves - distances[to] : 0
    res += Math.min(cost, sum)
  }
  console.log(res)
  return res
}

reachableNodes(
  [
    [0, 1, 10],
    [0, 2, 1],
    [1, 2, 2],
  ],
  6,
  3
)
