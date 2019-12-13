/**
 * 
 * @param {string} word 
 * @return {boolean}
 */
function isPalindromeWord(word){
  const len = word.length;
  for(let i=0; i<=len/2; i++){
    if(word[i].toLowerCase() !== word[len-i-1].toLowerCase()) return false;
  }
  return true;

}

/**
 * 
 * @param {string} string -- multi words string 
 * @return {boolean}
 */

function isPalindromeString(string){
  let testStr = string.replace(/\s|[^a-z]/gi, '').toLowerCase();
  const len = testStr.length;
  for(let i=0; i<=len/2; i++){
    if(testStr[i] !== testStr[len-i-1]) return false;
  }
  return true;
}