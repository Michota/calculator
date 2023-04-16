"use strict";
// Selecting elements

// const result = document.querySelector(".cResult");
// const previuousResult = document.querySelector(".cPesult");
const calculator = document.querySelector(".calculator"),
  displayedResult = document.querySelector(".cResult"),
  previousResult = document.querySelector(".pResult"),
  btnNumber = document.querySelectorAll(".btn-number"),
  clearEverythingBtn = document.querySelector("CE");

// --- Buttons ---

// Variables

let memory = 0;
let newCalculation = false;
let result = 0;
let operation = "";
let prevOp = "";

// Event delegation
calculator.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn");
  if (!clicked) return;
  // Number clicked
  if (clicked.classList.contains("btn-number")) {
    numberClicked(clicked);
  }
  if (clicked.classList.contains("btn-op")) {
    operationClicked(clicked);
  }
  if (clicked.classList.contains("CE")) {
    clearEverything();
  }
});

// Clicking number buttonslive-server

const numberClicked = function (btn) {
  if (displayedResult.textContent.includes(".")) return;
  // Add numbers to displayedResult, if number is not 0.
  // If its 0, change it to clicked number.
  // If there is a number in memory, change displayed Result to clicked number, and then add another numbers to it
  if (newCalculation === true) {
    displayedResult.textContent = btn.textContent;
    newCalculation = 0;
    return;
  }
  Number(displayedResult.textContent) === 0
    ? (displayedResult.textContent = btn.textContent)
    : (displayedResult.textContent += btn.textContent);

  // Number(displayedResult.textContent) === 0
  //   ? (displayedResult.textContent = btn.textContent)
  //   : (displayedResult.textContent += btn.textContent);
};

const operationClicked = function (btn) {
  result = Number(displayedResult.textContent);
  if (operation === btn.textContent) return;
  if (operation) calculate(memory, result, operation);
  memory = result;
  operation = btn.textContent;
  newCalculation = true;
};

const calculate = function (a, b, op) {
  console.log(a, b, op);
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "x":
      result = a * b;
      break;
    case "÷":
      result = a / b;
    case "=":
      if (prevOp === "=") result = displayedResult.textContent;
      calculate(a, b, prevOp);
  }
  // result = checkResult(result.toString());
  displayedResult.textContent = result;
  memory = 0;
  operation = "";
  console.log("end of calc");
};

const clearEverything = function () {
  memory = 0;
  newCalculation = false;
  result = 0;
  operation = "";
  prevOp = "";
  displayedResult.textContent = 0;
};

// const checkResult = function (res) {
//   if (res.length > 15) res = res.slice(0, 12) + "...";
// };
