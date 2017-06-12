function calculator(number1, number2, operator) {
    function sum(a, b) {
        return a + b
    }
    function substract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }

    switch (operator){
        case '+' : return sum(number1, number2);
        case '-' : return substract(number1, number2);
        case '*' : return multiply(number1, number2);
        case '/' : return divide(number1, number2);
        default: return 'error';
    }
}
console.log(calculator(2, 4, '+'));