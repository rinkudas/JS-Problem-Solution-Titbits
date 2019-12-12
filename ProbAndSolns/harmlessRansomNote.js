/**
 * 
 * @param {string} noteText
 * @param {string} magazineText
 * @return {boolean}
 */

function harmlessRansomNote(noteText, magazineText){
  let magazineHash = {};
  let noteHash = {};
  let magArr = magazineText.split(' ');
  let noteArr = noteText.split(' ');
  
  for(let word of magArr){
    if(!magazineHash[word]){
      magazineHash[word] = 1;
    }else{
      magazineHash[word] += 1;
    }
  }

  for(let word of noteArr){
    if((!magazineHash[word])|| (magazineHash[word] < 1)){
      return false;
    }else{
      magazineHash[word] -= 1;
    }
  }
  return true;
}