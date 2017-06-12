function solver(inputString) {
    const regex = /[\w]+/gm;
    let matches = (inputString.match(regex) || []);
    return matches.join('|');
}
console.log(solver('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));