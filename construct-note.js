// add whatever parameters you deem necessary
function constructNote(str1, str2) {
   if (str1=== "" || str2 === ""){
    return true
   }
   let one = str1.split("").sort()
   let two = str2.split("").sort()
   const arr1 =Array.from(new Set(one.split(','))).toString()
   const arr2 =Array.from(new Set(two.split(','))).toString()
   if (arr1.length > arr2.length){
   for (let i = 0 ; i < arr2.length ; i++) { 
   if (arr1[i] === arr2[i]) {return true}
   else {return false}}
}
if (arr1.length < arr2.length){
    for (let i = 0 ; i < arr1.length ; i++) { 
    if (arr1[i] === arr2[i]) {return true}
    else {return false}}
}
}
