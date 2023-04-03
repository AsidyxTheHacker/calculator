class Calculator {
    constructor(previousOperatorText, currentOperatorText) {
        this.previousOperatorText = previousOperatorText
        this.currentOperatorText = currentOperatorText
        this.allClear()
    }

    clear() {
        
    };

    allClear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operator = undefined
    };

    appendNumber(number) {
        this.currentOperand = number;
    };

    selectOperator(operator) {

    };

    compute() {

    };

    updateDisplay() {
        this.currentOperatorText.innerText = this.currentOperand;
    };
}

const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperatorText = document.querySelector('[data-previous-operator]');
const currentOperatorText = document.querySelector('[data-current-operator]');

const calculator = new Calculator(previousOperatorText, currentOperatorText)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});