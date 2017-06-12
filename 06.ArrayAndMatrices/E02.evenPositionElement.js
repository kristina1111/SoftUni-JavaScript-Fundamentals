function solver(arr) {
    let output = [];
    for(let i = 0; i<arr.length; i+=2){
        output.push(arr[i]);
    }
    return output.join(' ');
}
console.log(solver(['20', '30']));