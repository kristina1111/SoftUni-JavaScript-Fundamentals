function solver(string) {
    const regex = /\b(?:_)([a-zA-Z0-9]+)\b/gm;
    let output = [];
    let m;
    while ((m = regex.exec(string)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        output.push(m[1]);
    }

    return output.join(',');
}
console.log(solver('The _id and _age variables are both integers.'));