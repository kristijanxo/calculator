const screenTopRow = document.querySelector(".screen-top-row");
const screenBottomRow = document.querySelector(".screen-bottom-row");
const buttonContainer = document.querySelector(".button-container");
const pointButton = document.querySelector("#point");

buttonContainer.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.id) {
    case "zero":
      appendDigit(0);
      updateBottomRowScreen();
      break;

    case "one":
      appendDigit(1);
      updateBottomRowScreen();
      break;

    case "two":
      appendDigit(2);
      updateBottomRowScreen();
      break;

    case "three":
      appendDigit(3);
      updateBottomRowScreen();
      break;

    case "four":
      appendDigit(4);
      updateBottomRowScreen();
      break;

    case "five":
      appendDigit(5);
      updateBottomRowScreen();
      break;

    case "six":
      appendDigit(6);
      updateBottomRowScreen();
      break;

    case "seven":
      appendDigit(7);
      updateBottomRowScreen();
      break;

    case "eight":
      appendDigit(8);
      updateBottomRowScreen();
      break;

    case "nine":
      appendDigit(9);
      updateBottomRowScreen();
      break;

    case "point":
      appendDecimalPoint();
      updateBottomRowScreen();
      break;

    case "divide":
      storeValue();
      manageOperation();
      operator = "/";
      if (!didCalculation) {
        clearInputArray();
      }
      break;

    case "multiply":
      storeValue();
      manageOperation();
      operator = "*";
      if (!didCalculation) {
        clearInputArray();
      }
      break;

    case "minus":
      storeValue();
      manageOperation();
      operator = "-";
      if (!didCalculation) {
        clearInputArray();
      }
      break;

    case "plus":
      storeValue();
      manageOperation();
      operator = "+";
      if (!didCalculation) {
        clearInputArray();
      }
      break;

    case "equals":
      storeValue();
      manageOperation();
      num1 = null;
      num2 = null;
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
  if (operator === "/" && num2 === 0) {
    clearAll();
    screenBottomRow.textContent = "NOPE!";
  }
  if (operator !== null && num1 !== null && num2 !== null) {
    let result = operate(operator, num1, num2);
    result = Math.ceil(result * 1000) / 1000;
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
  updateDecimalState();
}

function appendDigit(input) {
  if (inputArray.length === 1 && inputArray[0] === 0) {
    if (input === 0) {
      return;
    }
    inputArray[0] = input;
    return;
  }
  if (didCalculation === true) {
    clearInputArray();
    inputArray.push(input);
    didCalculation = false;
  } else {
    inputArray.push(input);
  }
}

function appendDecimalPoint() {
  didCalculation = false;
  if (inputArray.length === 0) {
    inputArray.push(0, ".");
  } else {
    inputArray.push(".");
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
  if (inputArray.length !== 0) {
    if (num1 === null) {
      num1 = Number(inputArray.join(""));
    } else if (num2 === null && !didCalculation) {
      num2 = Number(inputArray.join(""));
    }
  }
}

function updateDecimalState() {
  if (inputArray.includes(".") || screenBottomRow.textContent.includes(".")) {
    pointButton.disabled = true;
  } else {
    pointButton.disabled = false;
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

updateBottomRowScreen();
