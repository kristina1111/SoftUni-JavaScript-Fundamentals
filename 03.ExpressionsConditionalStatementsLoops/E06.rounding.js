function roundNumber(arr) {
    let [num, precision] = arr; // mapping a new variable to each element of the array
    let factor = Math.pow(10, precision); // we initialize new number 10 with as much zeros as the precision
    // it will be used to take so much digits (after the point) from the number that we want to round, as we want to round to
    // e.g. if we want to round to 3 digits after the floating point, we first will multiply the number to 1000
    // then we will round the number (thus we will clear the digits after the point)
    num = Math.round(num*factor);
    // then we will divide by 1000 so that we will move back the point where it was at the beginning
    num /= factor;

    return num;
}

console.log(roundNumber([3.1465926535897932384626433832795, 2]));
console.log(roundNumber([33.1, -1]));