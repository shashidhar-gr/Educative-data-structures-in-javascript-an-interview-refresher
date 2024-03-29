/*
    Problem Statement
    Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index.

    Input
    An array of numbers (can even be floats, integers, and negative!)

    Output
    An array such that each index has a product of all the numbers in the array except the number stored at that index.

    Sample Input
    arr = [1,2,3,4]
    Sample Output
    arr = [24,12,8,6]
*/
function findProduct(arr = []) {
    let prod = 1;

    for(let i in arr){
        prod *= arr[i];
    }

    for(let i in arr){
        arr[i] = prod / arr[i];
    }

    return arr;
}

exports.findProduct = findProduct;