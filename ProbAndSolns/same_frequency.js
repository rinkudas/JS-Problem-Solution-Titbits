/***    Frequency Counter    ***/ 
/**
 * Write a function called sameFrequency
   Given two positive integers, find out if the two
   numbers have the same frequency of digits.

   sameFrequency(182, 281) // true
   sameFrequency(34, 14) // false
   sameFrequency(3589578, 5879385) // true
   sameFrequency(22, 222) // false
 */
/**
 * 
 * @param {Integer} num1 
 * @param {Integer} num2
 * @returns {Boolean}
 */

function sameFrequency(num1, num2){
    let lookup = {};
    let e;
    while(num1>0){
      e = (num1%10);
      num1 = parseInt(num1/10);
      lookup[e] ? lookup[e] += 1 : lookup[e] = 1;
    }
    while(num2>0){
      e = (num2%10);
      num2 = parseInt(num2/10);
      if(!lookup[e]){
        return false;
      }else{
        lookup[e] -= 1;
      }
    }
  
    return true;
  }