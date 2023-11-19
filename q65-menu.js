function showMenu() {
    console.log('Menu:');
    console.log('1. Add');
    console.log('2. Subtract');
    console.log('3. Multiply');
    console.log('4. Divide');
    console.log('5. Exit');
  }
  
  function performOperation(operation) {
    switch (operation) {
      case '1':
        console.log('Performing addition...');
        break;
      case '2':
        console.log('Performing subtraction...');
        break;
      case '3':
        console.log('Performing multiplication...');
        break;
      case '4':
        console.log('Performing division...');
        break;
      case '5':
        console.log('Exiting...');
        return;
      default:
        console.log('Invalid operation');
    }
  }
  showMenu();
  console.log(performOperation('2'));
  