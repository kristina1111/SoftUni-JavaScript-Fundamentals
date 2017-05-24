function solver(string, char) {
    // first split the string into array
    // then use array.prototype.reduce to find the occurrence of the given char in the array
    let output = string.split('')
        .reduce(
            function (occurrence, value) { // occurrence is the accumulation value, value is each element of the array
                return occurrence + (char === value); // (char === value) can be 0 (if false) or 1 (if true)
            },
            0); // 0 is the initial value of the occurrence

    console.log(output);
}

solver('woww11rwd', 'w')