/**
 *
  B extends A 
  D extends B

  Object Type Hierarch Graph
            Object 
        A           G       
      B     C        H       
      D   E   F    I   J          

  PL internal representation of Type Hierarchy

  Find the type common of 2 or more objects
  // Example:
    I & J = H
    D & E & F = A
    D & I & F = Object
    
  Several Use cases:

  Var x = cond ? st1 : st2;

  st1 returns D
  st2 returns F 

  x -- type ? it should be atleast A

  function with serveral return statements...

  // Trying to infer the type of an 
  // terinary operator
  // if-else if-else statement
  // return(s) of a function

  // Other use cases 
  // Find the common function in hierarchy
  // to execute on these two objects, for 
  // example +
 */


E = {name: "E"}; F = {name: "F"}
C = {name: "C", left: E, right: F}
D = {name: "D"};              
B = {name: "B", left: D}
A = {name: "A", left: B, right: C};


I = {name: "I"}; J = {name: "J"};
H = {name: "H", left: I, right: J};
G = {name: "G", left: H};

Object = {name: "Object", left: A, right: G};
Root = Object;

function findPath(Root, targetClass, parents=[]){
  if(Root == undefined) return false;
  parents.unshift(Root.name);
  if(Root.name == targetClass.name) return true;
  if ((Root.left != undefined && findPath(Root.left, targetClass, parents)) || (Root.right!= undefined && findPath(Root.right, targetClass, parents))) return true;
  parents.shift();
  return false;
};

function inferType(classes) {
  let parents_arr = [];
  for(cl of classes) {
    let p = [];
    findPath(Root, cl, p);    
    parents_arr.push(p);
  }
  
  //Loop over the elements in the first array
  for (var i=0; i<parents_arr[0].length; i++) {
    //get the value for the current index
    var val = parents_arr[0][i];
    //make sure every array has the value
    //if every does not find it, it returns false
    var test = parents_arr.every( function (arr) {
      //check the array to see if it has the element
      return arr.indexOf(val)!==-1;  
    });
    //If we find it, than return the current value
    if (test) {
      return val;
    }   
  }
  //if nothing was found, return null
  return null;
}

console.log(inferType([D, E, F]));
console.log(inferType([I, J]));
console.log(inferType([D, F, I]));