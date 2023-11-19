//53.

function findMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const length = sortedArr.length;
    
    if (length % 2 === 0) {
      const mid = length / 2;
      return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
      const mid = Math.floor(length / 2);
      return sortedArr[mid];
    }
  }
 console.log(findMedian([3, 1, 7, 5, 9, 2, 8, 4, 6]));
  