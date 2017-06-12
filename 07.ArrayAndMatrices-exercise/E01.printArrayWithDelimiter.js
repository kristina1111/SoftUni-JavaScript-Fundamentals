function solver(arr) {
    let delimiter = arr.pop();
    return arr.join(delimiter);
}
console.log(solver([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]));