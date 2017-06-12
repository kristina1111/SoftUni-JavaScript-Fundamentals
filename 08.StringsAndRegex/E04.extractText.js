function solver(input) {
    const regex =  /(?:\()(.*?)(?:\))/gm;
    let match  = (input.match(regex) || [] );
    match = match.map(function (e) {
        return e.slice(1, -1);
    });

    return match.join(', ');
}
console.log(solver('Rakiya Bulgarian brandy) is self-made liquor alcoholic drink)'));