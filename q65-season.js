function detectSeason(month) {
    let season;
  
    switch (month.toLowerCase()) {
      case 'december':
      case 'january':
      case 'february':
        season = 'Winter';
        break;
      case 'march':
      case 'april':
      case 'may':
        season = 'Spring';
        break;
      case 'june':
      case 'july':
      case 'august':
        season = 'Summer';
        break;
      case 'september':
      case 'october':
      case 'november':
        season = 'Fall';
        break;
      default:
        console.log('Invalid month');
        return;
    }
  
    return season;
  }

  console.log(detectSeason("march"));
 