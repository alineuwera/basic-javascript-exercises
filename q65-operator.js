//65.

function calculate(num1, num2, operator) {
    let result;
    
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return "Invalid operator";
    }
    
    return result;
  }
  
  
  const num1 = 10;
  const num2 = 5;
  const op= '-';
  console.log(calculate(num1,num2,op));
  