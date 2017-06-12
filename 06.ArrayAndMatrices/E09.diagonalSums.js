function solver(arr) {
    let leftSum = 0;
    let rightSum = 0;
    for(let row = 0, leftCnt=0, rightCnt = arr[0].length-1; row<arr.length; row++, leftCnt++, rightCnt--){
        leftSum += arr[row][leftCnt];
        rightSum += arr[row][rightCnt];
    }
    console.log(`${leftSum} ${rightSum}`);
}
// solver([[20, 40],
//     [10, 60]]);
solver([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);