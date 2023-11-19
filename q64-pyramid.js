//64.

function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
      console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
    }
  }
console.log(generatePyramid(10));
  