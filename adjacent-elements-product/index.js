/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
*/

//my solution

function adjacentElementsProduct(inputArray) {
    let product1 = 0;
    let product2 = 0;
    let largestProduct = inputArray[0] * inputArray[1];
    
    for (let i = 1; i < inputArray.length; i++) {
        product1 = inputArray[i] * inputArray[i + 1];
        product2 = inputArray[i] * inputArray[i - 1];
        
        largestProduct = largestProduct < product1 ? largestProduct = product1: largestProduct;
         largestProduct = largestProduct < product2 ? largestProduct = product2: largestProduct;
    }
    
    return largestProduct;
    
}

//solution with array methods
function adjacentElementsProduct2(arr) {
    return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
  }

//another solution

function adjacentElementsProduct3(inputArray) {
    var prod = inputArray[0] * inputArray[1];
    
    for (var i = 1; i<inputArray.length - 1;i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
    }
    
    return prod
}


