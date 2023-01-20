//Create a Class for our calculator
class Calculator {
  //create a constructor
  constructor(c, p) {
    this.currentTextElement = c;
    this.previousTextElement = p;
    this.clear();
  }
  //clear the result
  clear() {
    this.currentValue = "";
    this.previousValue = "";
  }
  //delete the last number
  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
  }
  //append the number
  appendNumber(btnValue) {
    //check if the last character is an operator or already a dot
    if (btnValue === "." && this.currentValue.includes(".")) {
      alert("you can't add more than one dot");
      return;
    }
    this.currentValue += btnValue;
  }
  //choose the operator
  chooseOperator(operator) {
    if (this.currentValue === "") return;
    if (this.previousValue !== "") this.calculate();
    this.operator = operator;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  }
  //calculate the result
  calculate() {
    let result;
    const p = parseFloat(this.previousValue);
    const c = parseFloat(this.currentValue);
    if (isNaN(p) || isNaN(c)) return;
    switch (this.operator) {
      case "+":
        result = p + c;
        break;
      case "-":
        result = p - c;
        break;
      case "*":
        result = p * c;
        break;
      case "/":
        result = p / c;
        break;
      default:
        return;
    }
    this.currentValue = result;
    this.operator = "";
    this.previousValue = "";
  }
  //display formater
  numberFormater(number) {
    //convert the number to string
    const stringNumber = number.toString();
    //split the number into integer and decimal [0] is integer and [1] is decimal
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    //Example:100.50=> int: 100 |.| decimal: 50
    //declare a variable to store the integer
    let myInteger;
    //check if the integer is a number
    if (isNaN(integerDigits)) {
      myInteger = "";
    } else {//if it is a number then format it
      //convert the integer to a string and add a comma after every 3 digits
      myInteger = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,//set the maximum number of decimal digits
      });
    }
    //check if the decimal is a number
    if (decimalDigits != null) {
      return `${myInteger}.${decimalDigits}`;
    } else {//if it is not a number then return the integer
      return myInteger;
    }
  }
  //update the display
  updateDisplay() {
    this.currentTextElement.innerText = this.numberFormater(this.currentValue);
    if (this.operator != "" && this.previousValue != "")
      this.previousTextElement.innerText = `${this.numberFormater(
        this.previousValue
      )} ${this.operator}`;
    else
      this.previousTextElement.innerText = this.numberFormater(
        this.previousValue
      );
  }
}
//get the value each item in our calculator
const clearAllBtn = document.querySelector(".item-all-clear");
const deleteBtn = document.querySelector(".item-delete");
const equalBtn = document.querySelector(".item-operator-equal");
const numberBtns = document.querySelectorAll(".item-number");
const operatorBtns = document.querySelectorAll(".item-operator");
const currentTextElement = document.querySelector(".current-value");
const previousTextElement = document.querySelector(".previous-value");
//create a new instance of our calculator
const calculator = new Calculator(currentTextElement, previousTextElement);
//add event listener to each button
//add event listener to each number
numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  })
);
//add event listener to each operator
operatorBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    calculator.chooseOperator(btn.innerText);
    calculator.updateDisplay();
  })
);
//add event listener to the equal button
equalBtn.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});
//add event listener to the clear and delete button
clearAllBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
//add event listener to the delete button
deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
