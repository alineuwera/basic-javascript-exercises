 //6.

 function greater(ourArray){
    var greatest;
    for( let i=1; i < ourArray.length; i++){
     if(ourArray[i] > ourArray[i-1]){
        greatest = ourArray[i];
     }
    //  else{
    //     greatest = ourArray[i-1];
    //  }
    }
    return greatest;
}
console.log(greater([1,6,9,23,11,87]));