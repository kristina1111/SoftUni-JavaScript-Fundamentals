function solver(arr) {
    let sum = 0;
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            // horizontal check
            if (isInRange(row, col + 1, arr)) {
                if (arr[row][col] == arr[row][col + 1]) {
                    sum++;
                }
            }
            // vertical check
            if (isInRange(row + 1, col, arr)) {
                if (arr[row][col] == arr[row + 1][col]) {
                    sum++;
                }
            }
        }
    }
    return sum;
    function isInRange(row, col, arr) {
        let rowInRange = row >= 0 && row < arr.length;
        let colInRange = rowInRange ? col >= 0 && col < arr[row].length : false;
        return rowInRange && colInRange;
    }
}
// console.log(solver([['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2']]));

console.log(solver([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]));

// console.log(solver([['test', 'done', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]));
