//49.
function generateFibonacci(n) {
    const sequence = [];
    
    if (n === 1) {
      sequence.push(0);
    } else if (n >= 2) {
      sequence.push(0, 1);
    
      for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
      }
    }
    
    return sequence;
}
  console.log(generateFibonacci(10));
  