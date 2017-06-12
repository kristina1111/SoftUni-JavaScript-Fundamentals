function solver(arr) {
    for(let row = 0; row<arr.length; row++){
        arr[row] = arr[row].split(' ').map(Number);
    }
    let diagonalSums = calculateDiagonalSums(arr);
    if(diagonalSums[0] == diagonalSums[1]){
        arr = replaceAllDigitsExceptDiagonalSums(arr, diagonalSums[0]);
    }

    for(let row = 0; row<arr.length; row++){
        console.log(arr[row].join(' '));
    }

    function replaceAllDigitsExceptDiagonalSums(arr, diagonalSum) {
        let leftDiagonalIndex = 0;
        let rightDiagonalIndex = arr[0].length-1;
        for(let row = 0; row<arr.length; row++){
            for(let col = 0; col<arr[row].length; col++){
                if(row-col != leftDiagonalIndex && row+col != rightDiagonalIndex){
                    arr[row][col] = diagonalSum;
                }
            }
        }
        return arr;
    }

    function calculateDiagonalSums(matrix) {
        let leftDiagonalSum = 0;
        let rightDiagonalSum = 0;
        for(let row = 0, cntLeft = 0, cntRight = matrix[0].length-1;
            row<matrix.length;
            row++, cntLeft++, cntRight--){
            leftDiagonalSum += matrix[row][cntLeft];
            rightDiagonalSum += matrix[row][cntRight];
        }
        return [leftDiagonalSum, rightDiagonalSum];
    }
}
solver(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
// solver(['1 1 1',
//     '1 1 1',
//     '1 1 0'])