/*
    Problem Statement
    Implement a function called maxMin(arr) which will re-arrange the elements of a sorted array so that the first position will have the largest number, the second will have the smallest, and the third will have second largest and so on. In other words, all the odd-numbered indices will have the largest numbers in the array in descending order and the even numbered indices will have the smallest numbers in ascending order.

    Input
    A sorted array

    Output
    An array with elements stored in max/min form

    Sample Input
    arr = [1,2,3,4,5]

    Sample Output
    arr = [5,1,4,2,3]
*/
maxMin([1,2,3,4,5,6])
function maxMin(arr = []) {
    if(arr.length < 1)
        return undefined;
    
    if(arr.length == 1)
        return arr;

    let res = [], tem = 0, i = 0, j = 0;

    for(i = 0, j = arr.length-1; i < j; i++, j--) {
        res.push(arr[j]);
        res.push(arr[i]);
    }

    if(arr.length % 2 !== 0)
        res.push(arr[i])

    return res;
}   

exports.maxMin = maxMin;