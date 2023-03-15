/*
    Given an array of integers, find the sum of its elements.
*/

const arr = [1, 2, 3, 4, 5]

function sumOfArrayElements(arr) {
    console.log(arr.reduce((a, b) => a + b, 0))
}

sumOfArrayElements(arr)