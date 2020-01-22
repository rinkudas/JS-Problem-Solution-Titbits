/*** Multiple Pointers - averagePair ***/ 

// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the 
// target average. There may be more than one pair that matches the average

// Sample Input:
//      averagePair([1,2,3], 2.5); // true
//      averagePair([1,3,3,5,6,7,10,12,19], 8); // true
//      averagePair([-1,0,3,4,5,6], 4.1); // false
//      averagePair([], 4); // false

/**
 * 
 * @param {int[]} arr 
 * @param {Number} avg
 * @returns {Boolean} True/False
 */


function averagePair(arr, avg){
  let start = 0,
      end = arr.length - 1;

  while(start < end){
      let s = arr[start];
      let e = arr[end];
      if(s+e === 2*avg){
          console.log(s, e);
          return true;
      }else{
          if(s+e > 2*avg){
              end--;
          }else{
              start++;
          }
      }
  }
  return false;
}
