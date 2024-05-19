let currentInput = '';
let operator = '';
let result = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function setOperator(op) {
  operator = op;
  result = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  let num1 = parseFloat(result);
  let num2 = parseFloat(currentInput);
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = 'Error';
      }
      break;
    default:
      result = '';
  }
  document.getElementById('display').value = result;
  currentInput = '';
  operator = '';
}
