let fullOperation = '';
let result = '';
let records =''


function pressButton(number) {
  console.log('hello world' + number);
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\/)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function CA(){
  fullOperation = ''
  showNumber();
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\/)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case 'x':
      fullOperation = multiplication(number1, number2);
      break;
    case '+':
      fullOperation= adition(number1, number2);
      break;
    case '/':
      fullOperation = division(number1, number2);
      break;
    case '-':
      fullOperation = substraction(number1, number2);
      break;
    case '^':
      fullOperation = power(number1, number2);
      break;

    default:
      break;
  }

  showNumber();

  
  records  = records + number1 + operador + number2 + '=' + fullOperation + ',' + '\n' ;


  document.getElementById('records').innerHTML = records;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function adition(number1, number2) {
  return number1 + number2;
}

function substraction(number1, number2) {
  return number1 - number2;
}

function division(number1, number2) {
  return number1 / number2;
}

function power(number1, number2) {
  return Math.pow(number1, number2);
}

function showNumber() {
  document.getElementById('operand1Display').innerHTML = fullOperation;
}


