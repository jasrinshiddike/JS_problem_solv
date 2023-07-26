function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Cannot divide by zero!";
        }
        return num1 / num2;
      default:
        return "Invalid operator!";
    }
  }
  
  const addition = calculator(5, 3, '+');
  console.log(addition);
  const subtraction = calculator(5, 3, '-');
  console.log(subtraction);
  const multiplication = calculator(5, 3, '*')
  console.log(multiplication);
  const division = calculator(6, 2, '/')
  console.log(division);