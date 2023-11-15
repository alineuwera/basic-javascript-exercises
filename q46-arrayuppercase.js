//46.

function stringToUpperCase(inputString){
    return inputString .map(function(str){
        return str.toUpperCase();
    });
}
console.log(stringToUpperCase(['aline uwera']));