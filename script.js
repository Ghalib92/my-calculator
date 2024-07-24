 // script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');

    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === '.') {
                if (!currentInput.includes('.')) {
                    currentInput += value;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }
            
            display.value = currentInput;
        });
    });

    equalsButton.addEventListener('click', () => {
        if (firstOperand !== '' && operator !== '' && currentInput !== '') {
            secondOperand = currentInput;
            let result;

            switch (operator) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
            }

            display.value = result;
            currentInput = result;
            firstOperand = '';
            operator = '';
            secondOperand = '';
        }
    });

    clearButton.addEventListener('click', () => {
        display.value = '';
        currentInput = '';
        firstOperand = '';
        operator = '';
        secondOperand = '';
    });
});
