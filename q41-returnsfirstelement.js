//41.

function firstElement(arr,n){
    return arr.slice(0,n)
}
var originalArray = [1,2,3,4,5,6,7,8];
var n = 1;
var first = firstElement(originalArray,n);
console.log(first);