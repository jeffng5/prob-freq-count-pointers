// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    obj={}
    if (arr2.length < arr1.length){
    arr1.forEach((element, index)=> {
        if (index){    
        obj[element] = arr2[index];
        } if (!index) obj[element] = null});

    }
    arr1.forEach((element, index)=> {
        obj[element] = arr2[index];
    });
    return obj
}

module.exports = {twoArrayObject}