//35.

function countVowels(inputString) {

    var vowels = ['a', 'e', 'i', 'o', 'u','m'];
  
    var lowercaseString = inputString.toLowerCase();
  
    var vowelCount = 0;
  
    for (var i = 0; i < lowercaseString.length; i++) {
      if (vowels.includes(lowercaseString[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  console.log(countVowels("aline uwera"));
    