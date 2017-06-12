function solver(inputString) {
    const regex = /[,;\(\).\n\t]/gm;
    inputString = inputString.replace(regex, " ")
        .split(' ')
        .filter(function (e) {
            return e!=="";
        });

    inputString.forEach(function (e) {
        console.log(e);
    })
}
// solver('let sum = (4) * 4,b = "wow";');
solver('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');