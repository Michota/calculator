"use strict";
// Selecting elements

// const result = document.querySelector(".cResult");
// const previuousResult = document.querySelector(".cPesult");
const calculator = document.querySelector(".calculator"),
  result = document.querySelector(".cResult"),
  previousResult = document.querySelector(".pResult"),
  btnNumber = document.querySelectorAll(".btn-number");

let memory = 0;
let secondMemory = 0;
let operationType;
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
});

// CLicking number buttons

const numberClicked = function (btn) {
  // jeżeli coś jest w memory, to kliknięcie spowoduje usunięcie poprzedniego wyniku
  if (!operationType)
    result.textContent === "0"
      ? (result.textContent = btn.textContent)
      : (result.textContent += btn.textContent);
};

const operationClicked = function (btn) {
  let operationResult;
  memory = result.textContent;
  operationType = btn.textContent;
  switch (operationType) {
    case "+":
      operationResult = add(memory, result.textContent);
  }
  result.textContent = operationResult;
  operationType = "";
};

const add = (a, b) => Number(a) + Number(b);
const substract = (a, b) => Number(a) - Number(b);

// OLD CODE

// const operationClicked = function (btn) {
//   switch (btn.textContent) {
//     case "=":
//       if (memory) {
//         operationClicked(previousOperation);
//         memory = "";
//       }
//       break;
//     case "+":
//       if (memory) {
//         result.textContent = Number(memory) + Number(result.textContent);
//         memory = "";
//       }
//       break;
//     case "-":
//       if (memory) {
//         result.textContent = Number(memory) - Number(result.textContent);
//         memory = "";
//       }
//       break;
//   }
//   memory = result.textContent;
//   previousOperation = btn.textContent;
//   console.log(memory);
// };

// OLD CODE

// const calculationOperation = function (btn) {
//   memoryCalc();
//   switch (btn) {
//     case "+":
//       console.log(add(calculation + result.textContent));
//       break;
//     case "-":
//       substract(previousResult.textContent + result.textContent);
//   }
// };

// // Operations

// const currentToPreviousResult = () => {
//   previousResult.textContent = result.textContent;
//   result.textContent = 0;
// };

// const memoryCalc = () => (calculation = result.textContent);

// const add = (a, b) => a + b;
// const substract = (a, b) => a - b;

// btnNumber.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // if result = 0, then clear
//     result.textContent === "0"
//       ? (result.textContent = btn.textContent)
//       : (result.textContent += btn.textContent);
//   });
// });

// --- Function Buttons ---
