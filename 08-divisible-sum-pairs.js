/*
    Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

    Example:

    ar = [1,2,3,4,5,6]
    k = 5
    Three pairs meet the criteria: [1,4], [2,3], [4,6]

    Returns: int: the numbers of pairs 
*/

const n = 6
const k = 3
const ar = [1, 3, 2, 6, 1, 2]

function divisibleSumPairs(n, k, ar) {
    let pairsCount = 0;
    ar.forEach((element, elementIndex) => {
        for (let i = 0; i < n; i++) {
            if (elementIndex < i && (element + ar[i]) % k == 0) {
                pairsCount++
            }
        }
    })
    console.log(pairsCount)
}

divisibleSumPairs(n, k, ar)