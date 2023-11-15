//28.

function palindromeString(first){
    var word = first. split("");
    var rev = word .reverse().join("");
    if(first === rev){
        return "palindrome";
    }else{
        return "not palindrome";
    }
}
console.log(palindromeString("aba"));