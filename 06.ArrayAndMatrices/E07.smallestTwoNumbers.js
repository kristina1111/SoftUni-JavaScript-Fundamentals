function solver(arr) {
    let sortedArr = arr.slice(0); // deep copy of the input array
    sortedArr.sort(function (a, b) {
        return a-b; //a>b doesn't work!!!
    });
    console.log(sortedArr.slice(0,2).join(' '));
    // console.log(sortedArr); // hasn't changed after the upper operations
}
// solver([30, 50, 5, 55])
solver([1000, 100])