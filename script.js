//Create a Class for our calculator
class Calculator {
  //clear the result
  clear() {
    this.resultTextElement = "";
  }
  //delete the last number
  delete() {
    resultTextElement.innerHTML = resultTextElement.innerHTML
      .toString()
      .slice(0, -1);
  }
  //append the number
  appendNumber(btnValue) {
    btnValue === undefined
      ? (resultTextElement.innerHTML = "")
      : (resultTextElement.innerHTML += btnValue);
  }
  //choose the operator
  chooseOperator(operator) {
    if (
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(
        resultTextElement.innerHTML.slice(-1)
      )
    ) {
      switch (operator) {
        case "+":
          resultTextElement.innerHTML += " + ";
          break;
        case "-":
          resultTextElement.innerHTML += " - ";
          break;
        case "*":
          resultTextElement.innerHTML += " * ";
          break;
        case "/":
          resultTextElement.innerHTML += " / ";
          break;
      }
    }
  }
  //calculate the result
  calculate() {

  }
}
//get the value each item in our calculator
const clearAllBtn = document.querySelector(".item-all-clear");
const deleteBtn = document.querySelector(".item-delete");
const equalBtn = document.querySelector(".equal");
const numberBtns = document.querySelectorAll(".item-number");
const operatorBtns = document.querySelectorAll(".item-operator");
const resultTextElement = document.querySelector(".calculatorHead");
//create a new instance of our calculator
const calculator = new Calculator();

numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerHTML);
  })
);
operatorBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    calculator.chooseOperator(btn.innerHTML);
  })
);
clearAllBtn.addEventListener("click", () => {
  calculator.clear();
});
deleteBtn.addEventListener("click", () => {
  calculator.delete();
});