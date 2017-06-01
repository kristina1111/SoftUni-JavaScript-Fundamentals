function solver(input) {
    const regex = /\w+/g;
    let m;

    let output = "";
    while ((m = regex.exec(input)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match) => {
            output += match.toUpperCase() + ', ';
        });
    }
    console.log(output.slice(0, -2));
}
solver('Hi, how are you?');