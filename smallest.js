//7.

function small(ourArray){
    var smaller;
    for( let i=1; i < ourArray.length; i++){
     if(ourArray[i] < ourArray[i-1])
     {
        smaller = ourArray[i];
     }
    }
    return smaller;
}
console.log(small([12,6,3,1]));