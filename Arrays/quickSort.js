/*
    Function that will take array of unsorted elements and 
    return sorted elements.
*/
function quickSort(arr = [], start = 0, end = 0) {
    
    if(start < end) {
        let pIndex = partition(arr, start, end);
        quickSort(arr, start, pIndex-1);
        quickSort(arr, pIndex+1, end);
    }

    return arr;
}

/*
    Function that will take array of elements,
    two indices and return the position of pivot element.
*/
function partition(arr = [], start = 0,  end = 0) {
    let pIndex = start, pivot = arr[end], temp = 0;

    for(let i = start; i < end; i++) {
        if(arr[i] <= pivot) {
            temp = arr[i];
            arr[i] = arr[pIndex];
            arr[pIndex] = temp;
            
            pIndex++;
        }
    }

    temp = arr[pIndex];
    arr[pIndex] = arr[end];
    arr[end] = temp;

    return pIndex; 
}

exports.quickSort = quickSort;
exports.partition = partition;