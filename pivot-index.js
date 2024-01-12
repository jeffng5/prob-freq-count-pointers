// add whatever parameters you deem necessary
function pivotIndex(arr) {
    left = 0
    right = arr.length - 1

    
    while (left < right) {
       if (arr[0,left] + arr[left,right] > 0){
        left++
       }
       if (arr[0,left] + arr[left,right] < 0){
        right++
       }

    }
}
