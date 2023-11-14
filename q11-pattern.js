//11.
function patt(rows){
    // for(let row = 1; row <= 4; row++){
    //     let row = "";
    //     for(let col = 5; col >= 1; col--){
    //         row += "1 ";

    //     }
    //     console.log(row);
    // }
    for(let i=rows; i>=1;i--){
        console.log('1 '.repeat(i));
    }
}
patt(5);