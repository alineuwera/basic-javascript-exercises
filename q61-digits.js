//61.

function containsOnlyDigits(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  
  // Example usage:
  const string1 = "12345";
  const string2 = "abc123";
  
  console.log(containsOnlyDigits(string1));
  console.log(containsOnlyDigits(string2));
  