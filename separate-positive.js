// add whatever parameters you deem necessary

function separatePositive(arr) {
left =[]
right =[]

for (let ele in arr) {
    if (ele > 0) {right.push(ele)}
    else {left.push(ele)
     }
}
if (left = [] || right == []) {
    return arr
} 
const fin = right.concat(left)
return fin
}

module.exports = {separatePositive}