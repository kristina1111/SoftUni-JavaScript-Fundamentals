function solver(sentence, string) {
    const regex = new RegExp("(?:^|\\s)"+ string + "\\b", 'gmi');
    return (sentence.match(regex) || []).length;
}
// console.log(solver(
//     'How do you plan on achieving that? How? How can you even think of that?',
//     'how'
// ));
console.log(solver(
    'There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
    'there'
));