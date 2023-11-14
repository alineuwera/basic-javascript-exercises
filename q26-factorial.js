//26.

function factorialNum(n){
    if( n < 0){
        return undefined;
    }else if( n === 0 || n === 1){
        return 1;
    }else{
        result = 1;
        for( let i = 2; i <= n; i++){
            result = result * i;
        }
        return result;
    }
    
}
console.log(factorialNum(5));
