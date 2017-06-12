function solver(row, col) {
    let matrix = [];
    for(let rowM = 0; rowM<row; rowM++){
        matrix[rowM] = [];
        for(let colM = 0; colM<col; colM++){
            matrix[rowM].push("");
        }
    }
    let cntRow = 0;
    let cntCol = 0;
    let cnt = 0;

    // console.log(matrix[cntRow][cntCol] == "");
    // return;
    while (cnt < row*col){
        while (cntCol < col && matrix[cntRow][cntCol]== ""){
            cnt++;
            matrix[cntRow][cntCol] = cnt;
            cntCol++
        }
        cntCol--;
        cntRow++;

        while (cntRow<row && matrix[cntRow][cntCol]== ""){
            cnt++;
            matrix[cntRow][cntCol] = cnt;
            cntRow++
        }
        cntRow--;
        cntCol--;
        while (cntCol>=0 && matrix[cntRow][cntCol]== "" ){
            cnt++;
            matrix[cntRow][cntCol] = cnt;
            cntCol--;
        }
        cntCol++;
        cntRow--;
        while (cntRow>=0 && matrix[cntRow][cntCol]== "" ){
            cnt++;
            matrix[cntRow][cntCol] = cnt;
            cntRow--;
        }
        cntRow++;
        cntCol++;
    }
    for(let rowM = 0; rowM<matrix.length; rowM++){
        console.log(matrix[rowM].join(' '));
    }
}

solver(7,7);