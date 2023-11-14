//16.
function sortArray(arr){
    console.log("first 3 element before sorting",arr.slice(0,3));
    console.log("last 3 element before sorting",arr.slice(-3));

    var sortedArr= arr.sort((a,b)=>a-b);
    
    var first3=sortedArr.slice(0,3) ;
    console.log( "sorted array:",sortedArr);
    console.log("first 3 elements of the sorted array:",first3);
    

}
sortArray([12,34,5,6,9,59,3,2]);