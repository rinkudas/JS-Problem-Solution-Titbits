/**
 * Given a string S. The task is to print all permutations of a given string 
 * and all permutations should be in lexicographically increasing order.
 * @param {String} s
 */


function string_permute(s){
  let count_map = {};
  for(let ch of s){
    if(ch in count_map){
      count_map[ch] = count_map[ch] + 1;
    }else{
      count_map[ch] = 1;
    }
  }
  let keys = Object.keys(count_map).sort();
  let str = [];
  let count = [];
  for(let key of keys){
    str.push(key);
    count.push(count_map[key]);
  }
  let result = [...Array(s.length)].map(x=>'');
  permute_util(str, count, result, 0);
}

/**
 * Compute and print permutations
 * @param {Array} str 
 * @param {Array} count 
 * @param {Array} result 
 * @param {Integer} level 
 */
  
function permute_util(str, count, result, level){

  if(level == result.length){
    console.log(result.join(""));
    return;
  }
  
  for(let i=0;i<str.length; i++){
    if(count[i] == 0) continue;

    result[level] = str[i];
    count[i] -= 1;
    permute_util(str, count, result, level + 1);
    count[i] += 1;
  }

}

string_permute("AABC");