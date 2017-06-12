function solver(arr) {
    const regex = /[\d]+/gm;
    let numbers = [];
    arr.forEach(function (e) {
        let match = (e.match(regex) || []);
        match.forEach(function (m) {
            numbers.push(m);
        })
    });
    return numbers.join(' ');
}
console.log(solver([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]));