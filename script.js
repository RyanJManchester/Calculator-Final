// js and html identifiers - identify interactions
const body = document.querySelector("body");
const currentScreen = body.querySelector("#currentOpScreen");
const prevScreen = body.querySelector("#lastOpScreen");

const clear = body.querySelector("#clear");
const del = body.querySelector("#del");
const dot = body.querySelector("#dot");
const operators = body.querySelectorAll(".operator");
const numbers = body.querySelectorAll(".numbers");
const equals = body.querySelector("#equals");

// Event listeners - lead interaction to their functions
operators.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

numbers.forEach((button) =>
  button.addEventListener("click", () => appendfunct(button.textContent))
);
let firstOperation = "5";
let secOperation = "3";


clear.addEventListener("click", () => clearfunct());
// del.addEventListener("click", deletefunct());
// dot.addEventListener("click", dotfunct());
// equals.addEventListener("click", equalfunct());

// explicit functions

function clearfunct() {
  console.log("clear function run");
  currentScreen.textContent = "";
  prevScreen.textContent = "";
  firstOperation = "";
  secOperation = "";
  console.log("firstOperator", firstOperation, "sec", secOperation);
}

