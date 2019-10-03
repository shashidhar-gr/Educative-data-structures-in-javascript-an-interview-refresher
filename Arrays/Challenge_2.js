/*
    Implement a function which merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

    Input:
    Two sorted arrays.

    Output:
    A merged sorted array consisting of all elements of both input arrays.

    Sample Input
    arr1 = [1,3,4,5]  
    arr2 = [2,6,7,8]

    Sample Output
    arr = [1,2,3,4,5,6,7,8]
*/
function mergeArrays(arr1 = [], arr2 = []) {

    if(arr1.length == 0)
        return arr2;

    if(arr2.length == 0)
        return arr1;

    let i = 0, j = 0, k = 0, res = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            res[k] = arr1[i];
            k++;
            i++;
        }
        else {
            res[k] = arr2[j];
            k++;
            j++;
        }
    }

    while(i < arr1.length) {
        res[k] = arr1[i];
        k++;
        i++
    }

    while(j < arr2.length) {
        res[k] = arr2[j];
        k++;
        j++
    }

    return res;
}

exports.mergeArrays = mergeArrays;