/*
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    Ex: arr = [1,3,5,7,9]

    Expected Output:
    16 24
 */


const arr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
    var maxArray = [...arr];
    var minArray = [...arr];

    const maxValue = Math.max.apply(Math, arr)
    const minValue = Math.min.apply(Math, arr)

    const maxIndex = arr.indexOf(maxValue)
    const minIndex = arr.indexOf(minValue)

    maxArray.splice(minIndex, 1)
    minArray.splice(maxIndex, 1)

    console.log(`${minArray.reduce((a, b) => a + b, 0)} ${maxArray.reduce((a, b) => a + b, 0)}`)

}

miniMaxSum(arr)
