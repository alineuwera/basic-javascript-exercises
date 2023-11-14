//13.
function pattern(a){
    for(let j = 0; j < a; j++){
        var arr=[];
        for(let i = 0; i< a; i++) {
            if(i===0 || i===a-1 || j===0 || j===a-1){
                arr+="1 ";
            }
            else{
                arr+="0 "
            }
        }
        console.log(arr);
    }
}
pattern(5);