//57.

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return "not prime";
      }
    }
    
    return  "is prime";
  }
 console.log(isPrime(23));
  