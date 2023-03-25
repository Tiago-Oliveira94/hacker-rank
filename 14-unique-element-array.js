/*
    Given an array of integers, where all elements but one occur twice, find the unique element.

    Example = [1,2,3,4,3,2,1]

    The unique element is 4.
*/

const a = [1, 2, 3, 4, 3, 2, 1]

function lonelyinteger(a) {
    const aux = {};
    for (let i = 0; i < a.length; i++) {
        aux[a[i]] = aux.hasOwnProperty(a[i]) ? aux[a[i]] += 1 : aux[a[i]] = 0
    }
    const getUnique = objectValueByKey(aux, 0)
    console.log(getUnique)
}

function objectValueByKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] == value)
}

lonelyinteger(a)