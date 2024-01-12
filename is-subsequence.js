// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    function freqCounter(arr) {
        let freq = {};
    
        for (let val of arr.toString()) {
            let valCount = freq[val] || 0;
            freq[val] = valCount + 1
        }
    return freq
    }
let hash1 = freqCounter(str1)
let hash2 = freqCounter(str2)

for (let key in Object.keys(hash1)){
    if(hash2[key] == hash1[key]) return true
}
return false
}




module.exports = {isSubsequence}