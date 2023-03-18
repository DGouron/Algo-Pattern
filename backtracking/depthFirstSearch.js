/**
 * Depth First Search (DFS) is a graph traversal algorithm that explores as far as possible along the deepest path of a tree or graph before backtracking. 
 * It starts from a starting node and explores as far as possible along each branch before backtracking. 
 * This means that the algorithm moves deep into the tree or graph before returning to explore other branches. 
 * The DFS algorithm follows a single path until it reaches a leaf or a node that has not yet been visited. 
 * Then it backtracks to explore neighboring nodes that have not been visited along the path it has taken. 
 * It continues in this way until it has visited all nodes of the graph or tree. DFS is often used for pathfinding or finding all 
 * possible solutions to a problem. It is also used in algorithms for finding cycles in graphs, maze traversal, and other similar problems.
 * 
 * 
 * Given a ternary tree, where each node in the tree can have up to three children. Find all the root-to-leaf paths in the tree.
 * Return a list of lists, where every list represents a path from root to leaf.
 * 
 * Example 1:
 * Input: root = [1,null,2,4]
 * Output: [[1,2,4]]
 * Explanation: The only root-to-leaf path is [1,2,4].
 * 
 * Example 2:
 *             1
 *           / | \
 *          2  3  4
 *        / |  |    \
 *       5  6  7     8
 * 
 */

function findPaths(root) {
  const result = [];

  function depthFirstSearch(node, path) {
    if (!node) return;
    path.push(node.val);

    if (!node.left && !node.middle && !node.right) {
      result.push([...path]);
    } else {
      depthFirstSearch(node.left, path);
      depthFirstSearch(node.middle, path);
      depthFirstSearch(node.right, path);
    }

    path.pop();
  }

  depthFirstSearch(root, []);

  return result;
}

module.exports = findPaths;