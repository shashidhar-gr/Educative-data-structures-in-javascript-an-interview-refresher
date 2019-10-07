var quickSort  = require('./quickSort').quickSort;
/*
    Problem Statement
    Implement a function findSecondMaximum(arr) which returns the second largest element in the array. Assume that the array length will always be greater than 1 and it will not contain duplicates, i.e. there will always be a maximum and a second maximum.

    Input
    An array

    Output
    Second largest element in the array

    Sample Input
    [9,2,3,6]

    Sample Output
    6
*/

function secondMax(arr = []) {
    if(arr.length < 1)
        return undefined;
    
    if(arr.length == 1)
        return arr[0];

    arr = quickSort(arr, 0, arr.length-1);

    return arr[arr.length-2]
}

exports.secondMax = secondMax;