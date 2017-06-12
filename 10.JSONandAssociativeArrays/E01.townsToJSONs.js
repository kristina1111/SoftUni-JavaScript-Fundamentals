function solver(arr) {
    arr = arr.map(function (e) {
        return e.split('|')
            .filter(function (e) {
                return e !== '';
            })
            .map(function (e) {
                return e.trim();
            });
    });
    let objects = [];
    let properties = arr[0];

    for (let arrayIndex = 1; arrayIndex < arr.length; arrayIndex++) {
        objects.push({});
        for (let elementIndex = 0; elementIndex < arr[arrayIndex].length; elementIndex++) {
            objects[objects.length-1][properties[elementIndex]] = isNaN(arr[arrayIndex][elementIndex]) ? arr[arrayIndex][elementIndex] : Number(arr[arrayIndex][elementIndex]);
        }
    }

    return JSON.stringify(objects);
}


console.log(solver(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
));
