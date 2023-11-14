//12.
function pattern(a){
    for(let j = 0; j < a; j++) {
        var arr =[];
        for(let i = a-1; i >= 0; i--) {
            if(i>=j){
            arr+="1 ";
        }
        else{
            arr+="0 "
        }
    }
    console.log(arr);
}
}
pattern(4);