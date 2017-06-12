function solver(arr) {
    let output = [];
    arr.forEach(function (e) {
        if(e<0){
            output.unshift(e);
        }else{
            output.push(e);
        }
    });
    return output.join('\n');
}
// console.log(solver([7, -2, 8, 9]));
console.log(solver([3, -2, 0, -1]));