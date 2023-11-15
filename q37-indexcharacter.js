//37.

function indexOfCharacter(inputString,character){
    var word = inputString.split("");
    for( var i= 0; i < word.length; i++){
        if( word[i] === character){
            return i;
        }
    }
}
console.log(indexOfCharacter("aline","e"));