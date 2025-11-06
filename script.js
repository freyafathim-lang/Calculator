const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    if (resultInput.value === '' && operator !== '-') return;
    if (resultInput.value.slice(-1) === '+' || resultInput.value.slice(-1) === '-' || resultInput.value.slice(-1) === '*' || resultInput.value.slice(-1) === '/') {
        resultInput.value = resultInput.value.slice(0, -1) + operator;
    } else {
        resultInput.value += operator;
    }
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function clearResult() {
    resultInput.value = '';
}

function deleteLastChar() {
    resultInput.value = resultInput.value.slice(0, -1);
}
