//39.

function presentArray(word){
    var arrayList = ["aline","uwera","love","papa","and","mama"];
    for( var i = 0; i < arrayList.length ; i++){
    if( arrayList[i] === word){
        return "we have it";
    }else{
        return "we don't have it";
    }
}
}
console.log(presentArray("aalice"));