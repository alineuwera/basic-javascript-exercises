 function converter(amount,current){
    switch(current){
        case "$":
            return amount * 1200;
            break;
            case "frw":
            return amount  / 1200;
            break;
            default:
                return "can not convert";
    }
 }
 console.log(converter(20,'$'));