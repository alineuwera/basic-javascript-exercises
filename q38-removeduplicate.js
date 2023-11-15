//38.

function removeDuplicate(arr){
    var unique = new Set(arr);
    var uniqueArray = Array.from(unique);
    return uniqueArray;
}
console.log(removeDuplicate([1,2,2,3,4,4,5,5,2,8,9,9]));