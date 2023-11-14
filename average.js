 //8.
function myArray(arr){
    var sum = 0;
    var average = 0;
    for(var i=0 ; i<arr.length;i++ ){
     sum+=arr[i];
     average = sum/arr.length;
    }
    return average;

 }
 console.log(myArray([1,2,3,4,5]));  