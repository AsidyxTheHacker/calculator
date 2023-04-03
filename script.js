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
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    };

    selectOperator(operator) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    };

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operator) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            case '%':
                computation = prev % current
                break
            default:
                return
        }
        this.currentOperand = computation;
        this.operator = undefined;
        this.previousOperand = '';
    };

    updateDisplay() {
        this.currentOperatorText.innerText = this.currentOperand;
        this.previousOperatorText.innerText = this.previousOperand;
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

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectOperator(button.innerText)
        calculator.updateDisplay()
    })
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})