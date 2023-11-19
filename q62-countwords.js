//62.

function countWords(sentence) {
    return sentence.split(' ').filter(word => word.length > 0).length;
  }
  console.log(countWords("aline uwera love"));
  