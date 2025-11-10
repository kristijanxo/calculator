const screenTopRow = document.querySelector(".screen-top-row");
const screenBottomRow = document.querySelector(".screen-bottom-row");
const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "zero":
      appendInput(0);
      break;

    case "one":
      appendInput(1);
      break;

    case "two":
      appendInput(2);
      break;

    case "three":
      appendInput(3);
      break;

    case "four":
      appendInput(4);
      break;

    case "five":
      appendInput(5);
      break;

    case "six":
      appendInput(6);
      break;

    case "seven":
      appendInput(7);
      break;

    case "eight":
      appendInput(8);
      break;

    case "nine":
      appendInput(9);
      break;

    case "backspace":
      inputArray.pop();
      updateScreenContent();
      break;
  }
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

function operate(a, operator, b) {
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

function updateScreenContent() {
  if (inputArray.length === 0) {
    screenBottomRow.textContent = "0";
  } else {
    screenBottomRow.textContent = inputArray.join("");
  }
}

function appendInput(input) {
  inputArray.push(input);
  updateScreenContent();
}

let inputArray = [];

let operator;
let num1;
let num2;
