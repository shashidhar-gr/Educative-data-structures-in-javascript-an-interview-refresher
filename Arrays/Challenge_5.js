var quickSort  = require('./quickSort').quickSort;
/*
    Problem Statement
    Implement a function findMinimum(arr) which finds the smallest number in the given array.

    Input
    An array of integers

    Output
    The smallest number in the array

    Sample Input
    arr = [9,2,3,6]

    Sample Output
    2
*/
function findMinimum(arr = []) {
    if(arr.length < 1)
        return undefined;
    
    if(arr.length == 1)
        return arr[0];

    arr = quickSort(arr, 0, arr.length - 1);
    
    return arr[0];
}

function findMinimumUsingApi(arr = []) {
    if(arr.length < 1)
        return undefined;
    
    if(arr.length == 1)
        return arr[0];
    
    arr.sort((a, b) => a - b);
    return arr[0];
}

function findMinimumIerateMethod(arr = []) {
    if(arr.length < 1)
        return undefined;
    
    if(arr.length == 1)
        return arr[0];

    let currentMin = arr[0];
    
    for(let val of arr) {
        if(val < currentMin)
            currentMin = val;
    }

    return currentMin;
}

exports.findMinimumUsingApi = findMinimumUsingApi;
exports.findMinimum = findMinimum;
exports.findMinimumIerateMethod = findMinimumIerateMethod;