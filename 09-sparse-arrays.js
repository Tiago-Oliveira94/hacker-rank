/*
    There is a collection of input strings and a collection of query strings. 
    For each query string, determine how many times it occurs in the list of input strings.
    Return an array of the results.

    Example:
    strings = ['aba', 'baba', 'aba', 'xzxb']
    queries = ['aba', 'xzxb', 'ab']

    There are 2 instances of 'aba', 1 of 'xzxb' and 0 of 'ab'. For each query, add an element to the return array.
    Results: [2,1,0]
*/

const strings = ['aba', 'baba', 'aba', 'xzxb']
const queries = ['aba', 'xzxb', 'ab']

function matchingStrings(strings, queries) {
    var result = [];

    queries.forEach(query => {
        let count = 0;
        for (let i = 0; i < strings.length; i++) {
            if (query == strings[i]) {
                count++;
            }
        }
        result.push(count)
    })
    console.log(result)
}

matchingStrings(strings, queries)