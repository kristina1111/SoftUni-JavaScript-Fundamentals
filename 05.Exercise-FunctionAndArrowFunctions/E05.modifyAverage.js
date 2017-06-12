function solver(input) {
    let number = input;

    while (average(number)) {
        number = Number(number.toString() + '9');
    }
    return number;


    function average(input) {
        function valueDigits(input) {
            // let value = 0;
            // for (let i = 0; i < input.toString().length; i++) {
            //     value += Number(input.toString()[i]);
            // }
            // return value;
            return input
                .toString()
                .split('')
                .reduce(
                    // function (a, b) {
                    //     return Number(a) + Number(b);
                    // }
                    (acc, curr) => acc + Number(curr),
                    0
                )
        }

        function numberDigits(input) {
            return input.toString().length;
        }
        return valueDigits(input) / numberDigits(input) <= 5;
    }
}

console.log(solver(1));