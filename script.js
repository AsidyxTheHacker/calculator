class Calculator {
    constructor(previousOperatorText, currentOperatorText) {
        this.previousOperatorText = previousOperatorText
        this.currentOperatorText = currentOperatorText
        this.allClear()
    }

    clear() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
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

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    };

    updateDisplay() {
        this.currentOperatorText.innerText = this.getDisplayNumber(this.currentOperand);
        this.previousOperatorText.innerText = this.previousOperand;
        if (this.operator != null) {
            this.previousOperatorText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operator}`;
        }
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

allClearButton.addEventListener('click', () => {
    calculator.allClear();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})