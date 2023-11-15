//44.

function positiveElements(arr){
     for( let i = 0; i < arr.length; i++){
        if( arr[i] <= 0){
            return "not all positive element";
        }
            
        }
        return "all element are positive";
    }
 
console.log(positiveElements([1,2,3,0]));