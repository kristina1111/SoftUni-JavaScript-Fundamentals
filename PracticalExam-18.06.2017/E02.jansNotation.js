function solver(arr) {
    //Removes the element at the position
    Array.prototype.removeAt = function(position){
        this.splice(position,1);
    };

    //inserts an element at a given position
    Array.prototype.insertAt = function(arg, position){
        this.splice(position, 0, arg);
    };

    let resultNumber = arr[0];
    while(arr.length>1){
        for(let i = 0; i<arr.length; i++){
            if(isNaN(arr[i])){
                if(i<=1){
                    resultNumber = 'Error: not enough operands!';
                    break;
                }
                let operand1 = arr[i-2];
                let operand2 = arr[i-1];
                resultNumber = calculate(operand1, operand2, arr[i]);

                arr.insertAt(resultNumber, i-2);
                arr.removeAt(i-1);
                arr.removeAt(i-1);
                arr.removeAt(i-1);
                break;
            }else{
                if(i==arr.length-1){
                    resultNumber = 'Error: too many operands!';
                    break;
                }
            }
        }

        if(isNaN(resultNumber)){
            break;
        }

    }

    if(resultNumber == '/' || resultNumber =='*' || resultNumber == '+' || resultNumber == '-'){
        resultNumber = 'Error: not enough operands!';
    }
    console.log(resultNumber);

    function calculate(operand1, operand2, operator) {
        switch (operator){
            case '+': return operand1 + operand2;
            case '-': return operand1 - operand2;
            case '*': return operand1*operand2;
            case '/': return operand1/operand2;
        }
    }
}
solver(['/']);
// solver([6,
//     0,
//     '/']);
// solver([5,
//     3,
//     4,
//     '*',
//     '-']);
// solver([7,
//     33,
//     8,
//     '-']);
// solver([15,
//     '/']);
// solver([31,
//     2,
//     '+',
//     11,
//     '/']);
// solver([-1,
//     1,
//     '+',
//     101,
//     '*',
//     18,
//     '+',
//     3,
//     '/']);