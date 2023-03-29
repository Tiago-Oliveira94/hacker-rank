/*
    An alternative sorting method, the counting sort, does not require comparison. 
    Instead, you create an integer array whose index range covers the entire range of values in your array to sort. 
    Each time a value occurs in the original array, you increment the counter at that index. 
    At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

    Example:
    arr = [1,1,3,2,1]

    All of the values are in the range [0...3], so create an array of zeros,result = [0,0,0,0]. The results of each iteration follow:

        i	arr[i]	 result
        0	 1	  [0, 1, 0, 0]
        1	 1	  [0, 2, 0, 0]
        2	 3	  [0, 2, 0, 1]
        3	 2	  [0, 2, 1, 1]
        4	 1	  [0, 3, 1, 1]

    The frequency array is [0,3,1,1]. These values can be used to create the sorted array as well: sorted = [1,1,1,2,3]

    For this exercise, always return a frequency array with 10 elements. The example above shows only the first 4 elements, the remainder being zeros.
    Return: int[10]: a frequency array
*/

function countingSort(arr) {
    let newArray = [0];

    for (let i = 0; i < 10; i++) {
        newArray.push(0)

    }
    for (let j = 0; j < arr.length; j++) {
        newArray[arr[j]] += 1
    }
    console.log(newArray)
}

countingSort(arr)