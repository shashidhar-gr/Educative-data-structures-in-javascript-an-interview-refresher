/*
    Problem Statement
    Implement a function that​ removes all the even elements from a given array. Name it removeEven(arr).

    Input
    An array with random integers.

    Output
    An array with only odd integers

    Sample Input
    [1,2,4,5,10,6,3]

    Sample Output
    [1,5,3]
*/
function removeEven(arr = []) {
    return arr.filter((v => (v % 2) != 0))
}

exports.removeEven = removeEven;