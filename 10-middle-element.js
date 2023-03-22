/*
Given an array of integers with an odd amout of elements, sort them and return the middle element.

Example:
arr = [1,3,2,7,9]
return 3
*/

const arr = [1, 3, 2, 5, 7, 9, 10, 4, 13]

function mediumElement(arr) {
    arr.sort((a, b) => { return a - b }) //needs this to sort numerically instead alphabetic
    var arrHalf = Math.ceil(arr.length / 2);
    console.log(arr[arrHalf - 1])
}

mediumElement(arr)
