//40.

function squareElement(arr){
   var squareArray = arr.map(function (element){
    return element * element;
   });
   return squareArray;
   }
console.log(squareElement([10]));