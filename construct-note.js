// add whatever parameters you deem necessary
function constructNote(str1, str2) {
function freqCounter(arr) {
    let freq = {};

    for (let val of arr) {
        let valCount = freq[val] || 0;
        freq[val] = valCount + 1
    }
return freq
}

let nums1 = freqCounter(str1)
let nums2 = freqCounter(str2)
console.log(nums1)
if (str1==="" || str2==="") return false
if (str1==="") return true
if (nums1.length !== nums2.length) return false;
for (let key in Object.keys(nums1)){
    if(nums2[key] !== nums1[key]) return false
}
for (let value in Object.values(nums1)){
    if(nums2[value] !== nums1[value]) return false
}
return true
}

module.exports = {constructNote}