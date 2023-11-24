

function findMaxMin(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);

    return {
        maxValue,
        minValue
    };
}
console.log(findMaxMin([3,2,5,6,7,8,0]));


