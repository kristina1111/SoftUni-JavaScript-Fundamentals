function solve(arr) {
    let sum = arr.reduce(
        (aggr, curr) => (aggr+=curr),
        0
    );
    console.log(sum);

    let sumInversedValues = arr.reduce(
        (aggr, curr) => (aggr+=1/curr),
        0
    );
    console.log(sumInversedValues);

    let concat = arr.reduce(
        (aggr, curr) => (aggr+=curr.toString())
    );
    console.log(concat);
}
solve([1, 2, 3]);