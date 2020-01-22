/**
 * 
 * Write a program to reverse digits of a number N.
 */

/**
 * 
 * @param {Integer} n 
 * @return {Integer}
 */


function reverse_int(n){
  let rev = 0;
  while(n>0){
    rev = (rev * 10) + (n%10);
    n = parseInt(n/10);
  }
  return rev;
}

/**
 * 
 * @param {Integer} n 
 * @return {Integer}
 */

function reverse_int_recursive(n, rev=0){
  if(n==0)
    return rev;
  rev = (rev * 10) + (n%10);
  return reverse_int_recursive(parseInt(n/10), rev);
}