function solver(arr) {
    let numRotations = arr.pop();
    for(let i = 0; i<numRotations%arr.length; i++){
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}
// console.log(solver([
//     1,
//     2,
//     3,
//     4,
//     2
// ]));

console.log(solver([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]));
