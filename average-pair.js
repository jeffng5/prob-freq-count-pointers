// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left =0;
    let right = arr.length-1

    while (left !== right){
        let sum = (arr[left] + arr[right]) 
    
    if (sum == target * 2) return true
    if (sum !== target * 2){
        left++
    }
    return false
    }
    
}

module.exports = {averagePair}