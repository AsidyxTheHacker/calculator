class Calculator {
    constructor(screenCurrent, screenPrevious) {
        this.screenPrevious = this.screenPrevious;
        this.screenCurrent = this.screenCurrent;
    }
}

const numKeys = document.querySelectorAll('.num');
const opKeys = document.querySelectorAll('.op');
const equal = document.getElementById("equalBtn");
const clear = document.getElementById("clearBtn");
const allClear = document.getElementById("allClearBtn");
const screenCurrent = document.getElementById('currentOperator');
const screenPrevious = document.getElementById('previousOperator');