"use strict";
// Selecting elements

// const result = document.querySelector(".cResult");
// const previuousResult = document.querySelector(".cPesult");
const calculator = document.querySelector(".calculator"),
  displayedResult = document.querySelector(".cResult"),
  previousResult = document.querySelector(".pResult"),
  btnNumber = document.querySelectorAll(".btn-number"),
  clearEverythingBtn = document.querySelector("CE");

let memory = 0; // "memory" of our calc, which stores a part of a calculation
let chosenOperation;
let pOp;
let result;
// let calcIsOn = 0; // making possible to change result displayed on the screen
// const addToMemory = (num) => (memory = Number(num));

// --- Buttons ---

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

// CLicking number buttons

const numberClicked = function (btn) {
  // if something is in memory, or operation was chosen, allow to clear result field
  // if (result.textContent === 0)
  if (
    displayedResult.textContent === "0" ||
    memory === displayedResult.textContent
  ) {
    displayedResult.textContent = btn.textContent;
  } else {
    displayedResult.textContent += btn.textContent;
  }
};

const operationClicked = function (btn) {
  memory = displayedResult.textContent;
  chosenOperation = btn.textContent;
  console.log(`M: ${memory}    R: ${displayedResult.textContent}`);
};

const calculate = function (a, b, op) {
  console.log(memory);
  switch (op) {
    case "+":
      displayedResult.textContent = add(a, b);
      pOp = op;
      break;
    case "-":
      displayedResult.textContent = substract(a, b);
      pOp = op;
      break;
    case "=":
      calculate(a, b, pOp);
      break;
  }
};

const add = (a, b) => Number(a) + Number(b);
const substract = (a, b) => Number(a) - Number(b);

// Old Code

// const numberClicked = function (btn) {
//   // if something is in memory, or operation was chosen, allow to clear result field
//   if (operationClicked) result.textContent = "0";
//   result.textContent === "0"
//     ? (result.textContent = btn.textContent)
//     : (result.textContent += btn.textContent);
// };

// const operationClicked = function (btn) {
//   // calcIsOn++;
//   memory = result.textContent;
//   console.log(memory);
//   calcResult(chosenOperation);
// };

// const calcResult = function (operation) {
//   if (chosenOperation)
//     // if (calcIsOn > 1)
//     switch (operation) {
//       case "+":
//         result.textContent = add(memory, result.textContent);
//     }
// };

// const add = (a, b) => Number(a) + Number(b);
// const substract = (a, b) => Number(a) - Number(b);

// const clearEverything = function () {
//   memory = 0;
//   result.textContent = 0;
// };
