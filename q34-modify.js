//34.

function stringModifier(word,a,b){
    var modi = word.split("");
    modi[a] = b;
    return modi.join("");
}
console.log(stringModifier("aline",4,"a"));
