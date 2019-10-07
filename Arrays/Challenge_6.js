/*
    Problem Statement
    Implement a function, findFirstUnique(arr) that returns the first unique integer in the array.

    Input
    An array of integers

    Output
    The first unique element in the array

    Sample Input
    [9,2,3,2,6,6]

    Sample Output
    9
*/
findFirstNonRepeatingNumber([9,2,3,2,6,6])
function findFirstNonRepeatingNumber(arr = []) {
    if(arr.length < 1)
        return undefined;
    
    if(arr.length == 1)
        return arr[0];

    let map = new Map();

    for(const element of arr) {
        map.has(element) == false ? map.set(element, 1) : map.set(element, map.get(element)+1)
    }

    for(const element of arr) {
        if(map.get(element) == 1)
            return element;
    }

    return -1;
}

exports.findFirstNonRepeatingNumber = findFirstNonRepeatingNumber;