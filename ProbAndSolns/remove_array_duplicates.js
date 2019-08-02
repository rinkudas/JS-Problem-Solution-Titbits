/**
 * Remove duplicates of an array and return an array of only unique
 * elements
 */

 // Codepen Link: https://codepen.io/imri123/pen/Ymxowz

 /**
  * @param {number[]} arr 
  * @return {number[]}
  */

 var uniqueArray = function(arr){
                        let hash = {};
                        let size = arr.length;
                        let unique = [];
                        for(let i=0; i<size; i++){
                            let current = arr[i];
                            if(!hash.hasOwnProperty(current)){
                                hash[current] = 1;
                                unique.push(current);
                            }
                        }
                        return unique;
                    }


var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]