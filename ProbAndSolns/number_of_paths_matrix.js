/**
 * Count all the possible paths from top left to bottom right of a MxN matrix,
 * with the constraints that from each cell you can either move to right or down
 * @param {Integer} m - Column
 * @param {Integer} n - Row
 * @return {Integer} - number of paths
 */


function num_paths_matrix_recursive(m, n){
  if((m == 1) || (n == 1))  return 1;

  return (num_paths_matrix_recursive(m-1, n) + num_paths_matrix_recursive(m, n-1));
}

console.log(num_paths_matrix_recursive(3, 3));
console.log(num_paths_matrix_recursive(2, 8));