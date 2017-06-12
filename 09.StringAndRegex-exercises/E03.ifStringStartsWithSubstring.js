function solver(string, substring) {
    return string.slice(0, substring.length) == substring;
}
// console.log(solver(
//         'How have you been?',
//         'how'
// ));
console.log(solver(
        'The quick fo…',
        'The quick brown fox…'
));