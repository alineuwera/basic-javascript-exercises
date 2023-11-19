//14.
function pattern(a){
    for(let i=0 ;i <a; i++) {
        let arr=[];
        for(let j=a-1 ;j>=0; j--) {
            if (i>=(a/2)) {
                if(i==j){
                    arr+="0 ";
                }
            
            else{
                arr+=" ";
            }
            } else {
                if(i==j){
                    arr+="1 ";
                }
            
            else{
                arr+=" ";
            }
                
            }
           
    }
    console.log(arr);
}}
pattern(4);