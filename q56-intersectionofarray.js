//56.

function arrayIntersection(arr1, arr2) {
    return arr1.filter(first => arr2.includes(first));
  }
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  console.log(arrayIntersection(array1,array2));
  