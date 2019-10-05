/*
    Problem Statement
    In this problem, you have to implement the findSum(arr,value) function which will take a number n as input and return two numbers that add up to n.

    Input
    An array and a number n

    Output
    An array with two integers a and b ([a,b]) that add up to n where:

    index of a in the input array < the index of b in the input array

    Sample Input

    arr = [1,21,3,14,5,60,7,6]
    n = 81

    Sample Output
    arr = [21,60]

    For example, in this illustration, we are given 81 as the number n and when we traverse the whole array
    we find that 21 and 60 are the integers that add up to 81. If our solution fails to find any two numbers, it should return false;
*/

function findPair(arr = [], value = undefined) {
    if(arr.length !==0 && value !== undefined){
        let rem = 0, hashTable = {}, res = [];
        
        for(let i = 0; i < arr.length; i++){
            rem = value - arr[i];
            if(hashTable[rem]){
                res.push(rem)
                res.push(arr[i])
                return res;
            }
            else {
                hashTable[arr[i]] = 1;
            }
        }
    }
    else {
        return false
    }

    return false
}

function findPairUsingApi(arr = [], value = undefined) {
    if(arr.length !==0 && value !== undefined){
        let found_values = new Set();
        let result = [];

        for(let i in arr){
            if(found_values.has(value - arr[i])) {
                result.push(value-arr[i])
                result.push(arr[i]);
                return result;
            }
            else {
                found_values.add(arr[i])
            }
        }
    }
    else {
        return false
    }
    return false
}

exports.findPair = findPair;
exports.findPairUsingApi = findPairUsingApi;

