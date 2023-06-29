const CalcFunctions = function () {
  let _value = 0;
  let _indicator = 0;
  let _operand = "";
  let _operandEntered = false;
  const write = (char) => {
    if (char === "." && String(_indicator).includes(".")) return;
    if (_indicator === 0 || _operandEntered) {
      _indicator = char;
      _operandEntered = false;
    } else if (String(_indicator).length < 17) _indicator += char;
    console.log(String(_indicator).length);
  };
  const calculate = () => {
    const operations = {
      "+": parseFloat(_value) + parseFloat(_indicator),
      "-": _value - _indicator,
      "*": _value * _indicator,
      "/": _value / _indicator,
    };
    _operandEntered = true;
    _indicator = operations[_operand];
  };
  const operand = (char) => {
    _value = _indicator;
    _operand = char;
    _operandEntered = true;
  };
  const setValue = (value) => {
    _value = value;
    _indicator = value;
  };
  const add = (value) => (_value += value);
  const updateDisiplay = () => {
    display.innerHTML = _indicator;
  };
  const chooseOperation = (operation) => {};
  return {
    write: write,
    setOperand: operand,
    updateDisiplay: updateDisiplay,
    chooseOperation: chooseOperation,
    set: setValue,
    add: add,
    calculate: calculate,
  };
};
const calc = CalcFunctions();
//calc.write("7");

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const resetButton = document.querySelector("[data-reset]");
const display = document.querySelector("[data-display]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.write(button.innerText);
    calc.updateDisiplay();
  });
});
resetButton.addEventListener("click", () => {
  calc.set(0);
  calc.updateDisiplay();
});
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.setOperand(button.innerText);
    calc.updateDisiplay();
  });
});

equalButton.addEventListener("click", () => {
  calc.calculate();
  calc.updateDisiplay();
});
