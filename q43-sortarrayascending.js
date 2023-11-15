//43.

function sortArraAscending(arr){
 return arr.sort(function(a,b){
    return a-b;
 });
}
console.log(sortArraAscending([5,3,4,1,2,8,0]));