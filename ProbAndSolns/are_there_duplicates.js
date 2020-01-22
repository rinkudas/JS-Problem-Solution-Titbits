/*** Coding Exercise 4: Frequency Counter / Multiple Pointers - areThereDuplicates ***/

// Implement a function called, areThereDuplicates which accepts a 
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. 

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Restrictions: 
//     Time - O(N)
//     Space - O(N)


// Using frequency counter pattern

/**
 * 
 * @param  {...any} args 
 * @returns {Boolean}
 */

function areThereDuplicates(...args){
    let lookup = {};
    for(let val of args){
        if(lookup[val]){
            return true;
        }else{
            lookup[val] = 1;
        }
    }

    return false;
}
