function solver(arr) {
    let sum = arr.reduce(
        (accumulate, current) => accumulate + current,
        0
    );
    console.log(`sum = ${sum.toFixed(2)}`);
    console.log(`VAT = ${(sum * 0.2).toFixed(2)}`);
    console.log(`total = ${(sum * 1.2).toFixed(2)}`);
}

solver([1,2,3])
