/**
 * Given a string, reverse each word in the sentence
 */

 // Codepen link: https://codepen.io/imri123/pen/BXdXOv?editors=1112

 /**
  * @param {string[]} word 
  * @return {string}
  */

 var reverseWordIterative = function(word){
                            let size = word.length;
                            
                            for(let i=0,j=size-1; i<j; i++,j--){
                                //ES6 standard
                                [word[i], word[j]] = [word[j], word[i]];
                            }

                            return word.join("");
                        }

var reverseWordRecursive = function reverse(word, i = 0) {
    let size = word.length;
    if(i==Math.floor(size/2)){
        console.log( word.join(""));
        return;
    }
    [word[i], word[size-i-1]] = [word[size-i-1], word[i] ];
  
    reverse(word, i+1) 
};

var string = "Welcome to this Javascript Guide!";

var reverseSentence = function f(string, separator) {
                        let words = string.split(separator);
                        let words1 = words.map(function(w) { 
                            w1 = reverseWordIterative(w.split(""));
                            return w1;
                          });

                        return words1.join(separator);
                    }

                    

console.log(reverseSentence(string, " "));