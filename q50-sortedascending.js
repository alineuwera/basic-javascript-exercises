//50.


// function sortArraAscending(arr){
//     return arr.sort(function(a,b){
//        return a-b;
//     });
//    }
//    console.log(sortArraAscending([5,3,4,1,2,8,0]));

 

   function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [5, 2, 8, 4, 1]; 
  
  console.log(isArraySorted(array1)); 
  console.log(isArraySorted(array2)); 
  