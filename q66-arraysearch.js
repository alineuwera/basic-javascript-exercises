function arraySearch(arr,element){
    for(let i = 0; i<arr.length; i++){
     if(arr[i] === element){
        return i;
     }
    }
}
console.log(arraySearch([1,2,3,4,5],3));