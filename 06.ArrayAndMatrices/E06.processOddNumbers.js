function solver(arr) {
    let output = [];
    for(let i = 1; i<arr.length; i+=2){
        output.unshift(arr[i]*2);
    }
    return output.join(' ');
}

// console.log(solver([10, 15, 20, 25]));
console.log(solver([3, 0, 10, 4, 7, 3]));