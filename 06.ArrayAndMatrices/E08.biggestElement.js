function solver(arr) {
    let biggestElement = arr[0][0];
    for(let i = 0; i<arr.length; i++){
        for(let k = 0; k<arr[i].length; k++){
            if(biggestElement<arr[i][k]){
                biggestElement = arr[i][k];
            }
        }
    }
    return biggestElement;
}
// console.log(solver([[20, 50, 10],
//     [8, 33, 145]]));
console.log(solver([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));