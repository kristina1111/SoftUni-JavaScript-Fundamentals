function solver(stringToSplit, delimiter) {
    return stringToSplit.split(delimiter).forEach(function (e) {
        console.log(e);
    })
}
solver(
    'One-Two-Three-Four-Five',
    '-')