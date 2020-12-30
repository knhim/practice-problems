// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False



//my unfinished solution (couldn't get all the tests to pass)
function validBraces(braces){
    let paren = '()';
    let bracesValue = '[]';
    let curlyBraces = '{}';
    let combinedValues = braces[0] + braces[1];
    let firstAndLastValuesCombined = braces[0] + braces[braces.length - 1];
    
    
    
    if (braces.length === 2) {
      if (combinedValues === paren || combinedValues === bracesValue || combinedValues === curlyBraces) {
      return true;   
    }
   }
    
    if (firstAndLastValuesCombined === paren || firstAndLastValuesCombined === bracesValue | firstAndLastValuesCombined === curlyBraces) {
      return true;
    }
    
    for (let i = 0; i < braces.length; i++) {
      let checkInnerValues = braces[i] + braces[braces.length - 1 - i];
      if (i > braces.length / 2) {
        return false;
      }
      if (checkInnerValues === paren || checkInnerValues === bracesValue || checkInnerValues === curlyBraces) {
        return true;  
      } 
  
  }
    return false;
  }

//best rated solution
function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;
  
    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];
  
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
  }