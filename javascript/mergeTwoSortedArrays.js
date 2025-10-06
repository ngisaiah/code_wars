// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array.

// Solution:

function mergeArrays(arr1, arr2) {
    const arr3 = arr1.concat(arr2); //joins arrays
    arr3.sort((a, b) => a - b); //sorts from ascending/descending
    return arr3.filter((el, indx) => arr3.indexOf(el) === indx); //remove dupes
}
