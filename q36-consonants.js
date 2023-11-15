//36.
 
function countConsonants(inputString){
    var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    var lowercaseString = inputString . toLowerCase();
    var consonantCount =  0;
    for( var i = 0; i < lowercaseString.length; i++){
        if(consonants.includes(lowercaseString[i])){
            consonantCount++;
        }

    }
    return consonantCount;
}
console.log(countConsonants("alinelove"));