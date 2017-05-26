function binaryToDecimal(binary) {
    // p is the accumulation value (starts from 0 /here we explicitly tell it is zero, but it will start from zero anyway/)
    // c is the current element of the array
    // the script first multiplies the accumulated value by 2, then adds the value of c (0 or 1) /the + before c is for casting the string to number/
    return binary.split('').reduce(
        function (p, c) {
            return p * 2 + +c
        },
        // written with an arrow function:
        // (p,c) => p*2 + +c,
        0
    );
}

// binaryToDecimal('00001001');
console.log(binaryToDecimal('11110000'));