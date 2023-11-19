function trafficLight(colorCode) {
    let color;
  
    switch (colorCode) {
      case 1:
        color = 'Red';
        break;
      case 2:
        color = 'Yellow';
        break;
      case 3:
        color = 'Green';
        break;
      default:
        color = 'Invalid color code';
    }
  
    return color;
  }
  console.log(trafficLight(3));
  