function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  function calculateSquareArea(side) {
    return Math.pow(side, 2);
  }
  
  function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  function calculateArea(shape, ...params) {
    switch (shape.toLowerCase()) {
      case 'circle':
        return calculateCircleArea(...params);
      case 'square':
        return calculateSquareArea(...params);
      case 'triangle':
        return calculateTriangleArea(...params);
      default:
        console.log('Invalid shape');
        return;
    }
  }
  
  console.log(calculateCircleArea(5));

//   const shape = 'circle';
//   const radius = 5;
//   const area = calculateArea(shape, radius);
//   console.log(`The area of the ${shape} is  ${area}`);
  
  const shape2 = 'triangle';
  const base = 8;
  const height = 4;
  const area2 = calculateArea(shape2, base, height);
  console.log(`The area of the ${shape2} is  ${area2}`);
  