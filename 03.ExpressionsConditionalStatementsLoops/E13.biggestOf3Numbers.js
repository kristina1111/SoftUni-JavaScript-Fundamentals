function getBiggestNumber(arr) {
    return arr.reduce(
        (a, c) =>  a>c ? a : c,
        arr[0]
    )
}

console.log(getBiggestNumber([]));