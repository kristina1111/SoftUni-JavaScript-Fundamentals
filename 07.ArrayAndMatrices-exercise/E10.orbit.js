function solver(arr) {
    let matrixRows = arr[0];
    let matrixCols = arr[1];
    let xCoord = arr[2];
    let yCoord = arr[3];
    let matrix = [];
    for (let row = 0; row < matrixRows; row++) {
        matrix[row] = [];
        for (let col = 0; col < matrixCols; col++) {
            matrix[row].push("*");
        }
    }
    let inputNumber = 1;
    matrix[xCoord][yCoord] = inputNumber;
    inputNumber++;
    while (matrixCols-xCoord >= inputNumber){
        matrix = fillWithNumberAroundElement(matrix, inputNumber, xCoord, yCoord);
        // console.log(matrix);
        inputNumber++;
    }
    // fillWithNumberAroundElement(matrix, inputNumber, xCoord, yCoord)
    // {
    //     console.log(matrix);
    //     if(matrixCols-xCoord == inputNumber){
    //         return matrix;
    //     }
    //     // inputNumber++;
    //     fillWithNumberAroundElement(matrix, inputNumber+1, xCoord, yCoord);
    // }

    function fillWithNumberAroundElement(matrix, number, elementXCoordinate, elementYCoordinate) {
        // if(matrix[0].length-elementXCoordinate == number){
        //     return matrix;
        // }
        // console.log(number);
        console.log(elementYCoordinate);
        let cntCol = elementXCoordinate + 1 - number < 0 ? elementXCoordinate - 1 + number : elementXCoordinate + 1 - number;
        let cntRow = elementYCoordinate + 1 - number < 0 ? elementYCoordinate : elementYCoordinate + 1 - number;

        let hasPassed = false;
        while (cntCol <= elementXCoordinate - 1 + number
        && cntRow == elementYCoordinate + 1 - number
        && cntCol < matrix[0].length
        && matrix[cntRow][cntCol] == "*") {
            matrix[cntRow][cntCol] = number;
            cntCol++;
            hasPassed = true;
        }
        if(hasPassed){
            cntCol--;
            cntRow++;
            hasPassed = false;
        }


        while (cntRow <= elementYCoordinate - 1 + number
        && cntRow < matrix.length
        && matrix[cntRow][cntCol] == "*") {
            matrix[cntRow][cntCol] = number;
            cntRow++;
        }
        cntRow--;
        cntCol--;
        while (cntCol >= elementXCoordinate + 1 - number
        && cntCol >= 0
        && matrix[cntRow][cntCol] == "*"
            ) {
            matrix[cntRow][cntCol] = number;
            cntCol--;
        }
        cntCol++;
        cntRow--;

        while (cntRow >= elementYCoordinate + 1 - number
        && cntRow >= 0
        && matrix[cntRow][cntCol] == "*"
            ) {
            matrix[cntRow][cntCol] = number;
            cntRow--;
        }
        // cntRow++;
        // cntCol--;

        return matrix;

        // return fillWithNumberAroundElement(matrix, number+1, elementXCoordinate, elementYCoordinate);
    }

    for (let row = 0; row<matrix.length; row++){
        console.log(matrix[row].join(' '));
    }

}


function orbit(input) {
    let dimensions = input[0].split(" ").map(Number);
    let position = input[1].split(" ").map(Number);
    // console.log(input);
    let rows = dimensions[0];
    let cols = dimensions[1];
    let starRow = position[0];
    let starCol = position[1];

    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }

    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}
// solver([4, 4, 0, 0]);
orbit(["6 6", "2 4"]);
// orbit(["7 7", "2 2"]);
// orbit(["4 4", "0 0"]);
// solver([3, 3, 2, 2]);