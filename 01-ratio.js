/*
    Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
    Print the decimal value of each fraction on a new line with 6 places after the decimal.

    Ex: arr = [1,1,0,-1,-1]

    There are n=5 elements, two positives, two negatives and one zero, their ratios are 2/5, 2/5 and 1/5.

    Expected Output:

    0.400000
    0.400000
    0.200000
 */

const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    var positiveValues = 0;
    var negativeValues = 0;
    var zeroValues = 0;
    
    arr.forEach(value => {
            if(value == 0){
                zeroValues++;
            }
            else if(value > 0){
                positiveValues++;
            }
            else{
                negativeValues++;
            }
        }
    )

    const parsedPositive = (positiveValues/arr.length).toFixed(6)
    const parsedNegative = (negativeValues/arr.length).toFixed(6)
    const parsedZero = (zeroValues/arr.length).toFixed(6)

    console.log(`${parsedPositive}\n` + `${parsedNegative}\n` + `${parsedZero}`);
}

plusMinus(arr)
