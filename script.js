// js and html identifiers - identify interactions
const body = document.querySelector("body");
const currentScreen = body.querySelector("#currentOpScreen");
const prevScreen = body.querySelector("#lastOpScreen");

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
let secOperation = "";

clear.addEventListener("click", () => clearfunct());
del.addEventListener("click", () => deletefunct());
dot.addEventListener("click", () => dotfunct());
// equals.addEventListener("click", equalfunct());

// explicit functions

function clearfunct() {
  console.log("clear function run");
  currentScreen.textContent = "";
  prevScreen.textContent = "";
  firstOperation = "";
  secOperation = "";
  // console.log(`firstop${firstOperation}sec${secOperation}`);
}
function deletefunct() {
  // console.log(currentScreen.textContent);
  currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
}
function dotfunct() {
  let isThereADot = currentScreen.textContent.includes(".");
  if (isThereADot) {
    //   console.log("you are already in a decimal place!");
  } else {
    if (currentScreen.textContent == "") {
      currentScreen.textContent += "0.";
    } else {
      currentScreen.textContent += ".";
    }
  }
}
function appendfunct(numInput) {
  console.log(`running, ${numInput}`);
  currentScreen.textContent += `${numInput}`;
}
function setOperator(input) {
  console.log(`firsOp ${firstOperation}, secOp ${secOperation}`);
  if (!firstOperation) {
    currentScreen.textContent += `${input}`;
    firstOperation = `${input}`;
    // console.log(`changed first to ${firstOperation}`);
  } else {
    console.log("second");
    let secOperation = input;
    console.log(`firsOp ${firstOperation}, secOp ${secOperation}`);

    // equalfunct(firstOperation, secOperation);
    //  currentScreen.textContent += `${input}`;
    //   console.log(`ran equalfunct with ${firstOperation}, sec ${secOperation})`);
  }
}
