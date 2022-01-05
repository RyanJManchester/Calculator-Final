// js and html identifiers - identify interactions
const body = document.querySelector("body");
const currentScreen = body.querySelector("#currentOpScreen");
const prevScreen = body.querySelector("#lastOpScreen");

let currentString = "";
const clear = body.querySelector("#clear");
const del = body.querySelector("#del");
const dot = body.querySelector("#dot");
const numbers = body.querySelectorAll(".nums");
const operators = body.querySelectorAll(".operator");
const equals = body.querySelector("#equals");

// Event listeners - lead interaction to their functions
operators.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

numbers.forEach((button) =>
  button.addEventListener("click", () => appendfunct(button.textContent))
);
let firstOperation = "";
clear.addEventListener("click", () => clearfunct());
del.addEventListener("click", () => deletefunct());
dot.addEventListener("click", () => dotfunct());
equals.addEventListener("click", () => equalsto());

// explicit functions

function clearfunct() {
  console.log("clear function run");
  currentScreen.textContent = "0";
  prevScreen.textContent = "";
  firstOperation = "";
  secOperation = "";
  currentString = "";
  // console.log(`firstop${firstOperation}sec${secOperation}`);
}
let split = "";
function deletefunct() {
  currentString = currentScreen.textContent.toString().slice(0, -1);
  currentScreen.textContent = currentString;
}
function dotfunct() {
  let isThereADot = currentScreen.textContent.includes(".");
  if (isThereADot) {
    return;
    //   console.log("you are already in a decimal place!");
  } else {
    if (currentString == "") {
      currentScreen.textContent = "0.";
      currentString = "0.";
    } else {
      currentScreen.textContent = "0.";
      currentString += "0.";
    }
  }
}
function appendfunct(numInput) {
  let prev = currentScreen.textContent;
  if ((prev == "") | (prev == "0")) {
    currentString += numInput;
    // console.log(`running, ${numInput}`);
    currentScreen.textContent = `${numInput}`;
  } else {
    currentString += numInput;
    // console.log(`running, ${numInput}`);
    currentScreen.textContent += `${numInput}`;
  }
}
function setOperator(input) {
  prevScreen.textContent = currentScreen.textContent;
  console.log(`setOperater()`);
  if (firstOperation == "") {
    firstOperation = `${input}`;
    currentScreen.textContent = `${input}`;
    currentString = "";
  } else if (Boolean(firstOperation)) {
    prevScreen.textContent = currentString;
    operate(prevScreen.textContent, firstOperation, currentString);
    firstOperation = `${input}`;
    currentScreen.textContent = `${input}`;
  }
  firstOperation = `${input}`;
}

function equalsto() {
  console.log("equal running");
  if (!firstOperation) {
    console.log("nothing to operate on.");
  } else {
    let p1 = prevScreen.textContent;
    let p2 = currentString;
    let op = firstOperation;
    console.log(p1, p2, op);
    currentScreen.textContent = operate(p1, op, p2);
    prevScreen.textContent = `${p1}${op}${p2}`;
  }
}

function operate(p1, op, p2) {
  prevScreen.textContent = `S${p1}${op}${p2}`;
  let result = "0";
  if (op == "÷" && p1 == "0") {
    alert("sneaky! you can't divide by 0");
    console.log(result);
    firstOperation = "";
    currentString = "";
    prevScreen.textContent = result;
    return;
  }
  console.log(`operatefunct run, ${p1}, ${op}, ${p2}`);
  let a = Number(p1);
  let b = Number(p2);
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "÷":
      result = a / b;
      break;
    case "x":
      result = a * b;
      break;
    case a == "0.":
      result = 0;
      break;
    case b == "0.":
      result = 0;
      break;
    default:
      null;
  }
  console.log(result);
  firstOperation = "";
  currentString = "";
  prevScreen.textContent = result;
  return result;
}
function equalfunct() {
  if (firstOperation == "") {
  }
}
