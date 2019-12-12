/**
 * 
 * @param {number} num 
 * @param {number} mod
 * @return {number}
 */

function isMultiple(num, mod){
  return num % mod === 0;
}

/**
 * 
 * @param {number} num
 * @return {number or string}
 */

function fizzBuzz(num){
  switch(true){
    case isMultiple(num, 15): return "FizzBuzz";
    case isMultiple(num, 3): return "Fizz";
    case isMultiple(num, 5): return "Buzz";
    default: return num;
  }
}

const main = [...Array(50)].map((_item,index) => fizzBuzz(index + 1));

main;

