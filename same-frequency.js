// add whatever parameters you deem necessary
function sameFrequency(dig1,dig2) {
    function freqCounter(arr) {
        let freq = {};
    
        for (let val of arr.toString()) {
            let valCount = freq[val] || 0;
            freq[val] = valCount + 1
        }
    return freq
    }
    let hash1 = freqCounter(dig1)
    let hash2 = freqCounter(dig2)
    if (dig1.toString().length !== dig2.toString().length) return false
    for (let key in Object.keys(hash1)){
        if(hash2[key] !== hash1[key]) return false
    }
    for (let value in Object.values(hash1)){
        if(hash2[value] !== hash1[value]) return false
    }
    return true
}

module.exports = {sameFrequency}