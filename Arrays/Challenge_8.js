/*
    Problem Statement
    Implement a function rightRotate(arr,n) which will rotate the given array by n. This means that the right-most elements will appear at the left-most position in the array and so on. You only have to rotate by one element from the right though.

    Input
    An array and a number by which to rotate that array

    Output
    The given array rotated by n elements

    Sample Input
    arr = [1,2,3,4,5]
    n = 3

    Sample Output
    arr = [3,4,5,1,2]
*/
function rigthRotate(arr = [], n = 0) {
    if(arr.length < 1)
        return undefined;
    
    if(arr.length == 1)
        return arr;

    let temp = 0, j = 0;        
    while(n) {
        temp = arr[arr.length-1];
        j = arr.length-1;

        while(j > 0) {
            arr[j] = arr[j-1];
            j--; 
        }

        arr[j] = temp;
        n--;
    }

    return arr;
}

exports.rigthRotate = rigthRotate;