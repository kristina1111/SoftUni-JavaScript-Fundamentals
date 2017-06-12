function solver(arr) {
    let sum = arr[0].reduce(
        (acc, curr) => acc + curr
    );

    for(let col = 0; col<arr[0].length; col++){
        let sumCol = 0;
        for(let row = 0; row<arr.length; row++){
            if(col == 0 && sum != arr[row].reduce(
                    (acc, curr) => acc + curr
                )){
                return false;
            }
            sumCol+=arr[row][col];
        }
        if(sum != sumCol){
            return false;
        }
    }

    return true;
}

// console.log(solver([[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]));