// add whatever parameters you deem necessary
function countPairs(arr, target) {
    left = 0
    right = arr.length-1
    count=0
    while (left < right){
        let sum = arr[left] + arr[right];
    if (sum === target) {
        count++
        left++
        right--
    }
    else if (sum !== target){
    right--
    }
    else{
        left++
    }
    } return count
}

module.exports = {countPairs}