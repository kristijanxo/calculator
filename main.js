const screenTopRow = document.querySelector(".screen-top-row");
const screenBottomRow = document.querySelector(".screen-bottom-row");
const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.id) {
    case "zero":
      appendInput(0);
      updateBottomRowScreen();
      break;

    case "one":
      appendInput(1);
      updateBottomRowScreen();
      break;

    case "two":
      appendInput(2);
      updateBottomRowScreen();
      break;

    case "three":
      appendInput(3);
      updateBottomRowScreen();
      break;

    case "four":
      appendInput(4);
      updateBottomRowScreen();
      break;

    case "five":
      appendInput(5);
      updateBottomRowScreen();
      break;

    case "six":
      appendInput(6);
      updateBottomRowScreen();
      break;

    case "seven":
      appendInput(7);
      updateBottomRowScreen();
      break;

    case "eight":
      appendInput(8);
      updateBottomRowScreen();
      break;

    case "divide":
      break;

    case "multiply":
      break;

    case "minus":
      break;

    case "plus":
      operator = "+";
      storeValue();
      clearInputArray();
      break;

    case "equals":
      storeValue();
      manageOperation();
      clearInputArray();
      break;

    case "backspace":
      inputArray.pop();
      updateBottomRowScreen();
      break;

    case "all-clear":
      clearAll();
      updateBottomRowScreen();
      break;
  }
  logValues();
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
}

function manageOperation() {
  if (operator && num1 && num2) {
    result = operate(operator, num1, num2);
    didCalculation = true;
    num1 = result;
    num2 = null;
    clearInputArray();
    inputArray.push(num1);
    updateBottomRowScreen();
  }
}

function updateBottomRowScreen() {
  if (inputArray.length === 0) {
    screenBottomRow.textContent = "0";
  } else {
    screenBottomRow.textContent = inputArray.join("");
  }
}

function appendInput(input) {
  if (didCalculation === true) {
    clearInputArray();
    inputArray.push(input);
    didCalculation = false;
  } else {
    inputArray.push(input);
  }
}

function clearInputArray() {
  inputArray.length = 0;
}

function clearAll() {
  inputArray.length = 0;
  operator = null;
  num1 = null;
  num2 = null;
  didCalculation = false;
}

function storeValue() {
  if (num1 === null) {
    num1 = Number(inputArray.join(""));
  } else if (num2 === null) {
    num2 = Number(inputArray.join(""));
  }
}

function logValues() {
  console.log({ num1, num2, operator, inputArray, didCalculation });
}

let inputArray = [];

let operator = null;
let num1 = null;
let num2 = null;

let didCalculation = false;
