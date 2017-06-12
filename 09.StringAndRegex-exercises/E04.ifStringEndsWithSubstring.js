function solver(string, substring) {
    // return string.slice(string.length-substring.length);
    return string.slice(string.length-substring.length) == substring;
}
console.log(solver(
    'This sentence ends with fun?',
    'fun?'
));