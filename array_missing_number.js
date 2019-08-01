/**
 * Given an array of size N-1 and given that there are numbers from 
 * 1 to N with one element missing, the missing number is to be found
 */

 /**
  * 
  * @param {number[]} arr 
  * @param {number} upperBound
  * @param {number} lowerBound
  * @return {number}
  */

 var findMissingNumber = function(arr, upperBound, lowerBound){
                            var theoreticalSum = [(upperBound * (upperBound + 1)) / 2] - [(lowerBound * (lowerBound - 1)) / 2]
                            const reducer = (accumulator, currentValue) => accumulator + currentValue;
                            var calculatedSum = arr.reduce(reducer);

                            return (theoreticalSum - calculatedSum);

                        }


// Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
// Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
// N is the upper bound and M is the lower bound => here M = 1

// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8


