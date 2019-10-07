/*
    Problem Statement
    Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left and all positive elements appear at the right.

    While zero is NOT positive or negative, we consider zero to be a positive​ integer for this challenge!

    Input
    An array containing positive and negative elements

    Output
    A sorted array with negative elements at the left and positive elements at the right

    Sample Input
    [10,-1,20,4,5,-9,-6]

    Sample Output
    [-1,-9,-6,10,20,4,5]
*/
function reArrange(arr = []) {
    if(arr.length < 1)
        return undefined;
    
    if(arr.length == 1)
        return arr;

    let i = 0, j = arr.length - 1, temp = 0;

    while(i < j) {
        while(arr[i] < 0) {
            i++;
        }

        while(arr[j] >= 0) {
            j--;
        }

        if(i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    return arr;
}

exports.reArrange = reArrange;