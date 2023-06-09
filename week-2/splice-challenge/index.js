/*
const splice = function (array, indexFrom, deleteCount, ...items) {
  if (deleteCount === undefined) deleteCount = array.length - indexFrom;

  return array.splice(indexFrom, deleteCount, ...items);
};

// remove 1 element
let arr = [1, 2, 3];
splice(arr, 0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
splice(arr, 0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1, 2, 3];
splice(arr, 0, 0, -1, 0);
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1, 2, 3];
splice(arr, 1, 1, 55);
console.log(arr); //should be [1,55,3]

// delete all elements from index to end
arr = [1, 2, 3, 4, 5];
splice(arr, 1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = splice(arr, 1);
console.log(deleted); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = splice(arr, 1, 1);
console.log(deleted); //should be [2]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = splice(arr, 1, 0, 5);
console.log(deleted); //should be []
*/

// Overriding the native splice method
Array.prototype.splice = function () {
  // Custom code here

  // Call the original splice method with the modified arguments
  // using Function.prototype.apply()
  return Array.prototype.splice.apply(this, []);
};

// remove 1 element
let arr = [1, 2, 3];
arr.splice(0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
arr.splice(0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1, 2, 3];
arr.splice(1, 1, 55);
console.log(arr); //should be [1,55,3]

// delete all elements from index to end
arr = [1, 2, 3, 4, 5];
arr.splice(1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = arr.splice(1);
console.log(deleted); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = arr.splice(1, 1);
console.log(deleted); //should be [2]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = arr.splice(1, 0, 5);
console.log(deleted); //should be []
