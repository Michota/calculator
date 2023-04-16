"use strict";

// Selecting elements
const prevNum = document.querySelector(".previousNumber"),
  currNum = document.querySelector(".currentNumber"),
  btnNum = document.querySelector(".number"),
  btnOpe = document.querySelector(".operator"),
  calcBody = document.querySelector(".calculator");

// Item delegation

let currentNumber = 0;
let previousNumber = 0;
let operator = "";
let result = 0;
let previousOperator = "";

calcBody.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target.closest(".btn");
  if (!clicked) return;
  if (clicked.classList.contains("btnC")) clearC(); // Clear everything
  if (clicked.classList.contains("btnCE")) clearCE(); // Clear most recen entry
  if (clicked.classList.contains("number")) addNumber(clicked.textContent); // number clicked
  if (clicked.classList.contains("operator"))
    operatorClicked(clicked.textContent);
});

// Clicking adds numbers to current number
function addNumber(num) {
  // console.log(num);
  if (currentNumber.toString().includes(".") && num === ".") return; // There can be one dot per number
  currentNumber += num;
  refreshCurrNum();
}

// Refresh currently displayed number
function refreshCurrNum() {
  currentNumber === 0
    ? (currNum.textContent = currentNumber)
    : (currNum.textContent = +currentNumber);
}

// Move current number to previous memory (previous number)
function currToMem() {
  previousNumber = currentNumber;
  prevNum.textContent = currNum.textContent;
  currentNumber = 0;
}

function clearPrev() {
  previousNumber = 0;
  prevNum.textContent = "";
}

function stringToNum() {
  currentNumber = Number(currNum.textContent);
  previousNumber = Number(prevNum.textContent);
}

function addMinus() {
  currNum.textContent = currentNumber = Number("-" + currentNumber.toString());
}

function operatorClicked(op) {
  // If there is there is no prevNum, move currNum to prevNum
  if (op === "√") {
    calc(currentNumber, previousNumber, op);
    currentNumber = Number(result);
    currNum.textContent = currentNumber.toString();
    clearPrev();
    return;
  }
  if (prevNum.textContent === "") {
    currToMem();
  } else {
    stringToNum();
    if (op === "=") {
      calc(previousNumber, currentNumber, previousOperator);
    }
    calc(previousNumber, currentNumber, op);
    currentNumber = Number(result);
    currNum.textContent = currentNumber.toString();
    clearPrev();
  }
  previousOperator = op;
}

function calc(a, b, op) {
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case ":":
      result = a / b;
      break;
    case "x":
      result = Math.pow(a, b);
      break;
    case "√":
      result = Math.sqrt(a);
      break;
  }
}

// Clear functions
// Clear most recent entry
function clearCE() {
  console.log("CE: recent entry cleared!");
  currNum.textContent = currNum.textContent.slice(0, -1);
  currentNumber = Number(currNum.textContent);
}

// Clear everything
function clearC() {
  console.log("C: everything cleared!");
  currentNumber = 0;
  previousNumber = 0;
  operator = "";
  result = 0;
  previousOperator = "";
  currNum.textContent = "";
  prevNum.textContent = "";
}

// Old,  bugged code
/*
function saveNum() {
  prevNum.textContent = previousNumber = Number(currNum.textContent);
  currNum.textContent = Number(currentNumber);
  currentNumber = 0;
}

function clearNum() {
  prevNum.textContent = "";
  previousNumber = 0;
  currNum.textContent = currentNumber = Number(currentNumber);
}

function operatorClicked(op) {
  if (operator) {
    operator = "";
    switch (op) {
      case "+":
        result = Number(currentNumber) + Number(previousNumber);
        break;
    }
    clearNum();
  }
  currNum.textContent = currentNumber = result;
  saveNum();
  operator = op;
}
*/
