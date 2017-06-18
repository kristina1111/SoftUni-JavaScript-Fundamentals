function solver(arr) {
    arr.pop();
    let coordinatesString = arr.pop();
    let coordinates = coordinatesString.split(' ');
    let matrixField = arr.map((e) => e.split(' ').map(Number));

    let sum = 0;
    let cnt = 0;
    coordinates.forEach(function (e) {
        e = e.split(',').map(Number);
        // if(matrixField[e[0]][e[1]]>0){
        //     sum += matrixField[e[0]][e[1]];
        //     cnt++;
        matrixField = bombAllAround(e[0], e[1], matrixField, coordinatesString);
        // }

    });


    for (let row = 0; row < matrixField.length; row++) {
        for (let col = 0; col < matrixField[0].length; col++) {
            if (matrixField[row][col] !== 0) {
                cnt++;
                sum += matrixField[row][col];
            }
        }
    }
    // console.log(matrixField);
    console.log(sum);
    console.log(cnt);

    function bombAllAround(x, y, field, allCoordinatesAsString) {
        let explosive = field[x][y];
        for (let row = x - 1; row <= x + 1; row++) {
            for (let col = y - 1; col <= y + 1; col++) {
                if (isInRange(row, col, field)) {
                    if (!(row == x && col == y)) {
                        field[row][col] = Math.max(field[row][col] - explosive, 0)
                    }
                }
            }
        }

        return field;

        function isInRange(row, col, field) {
            return row >= 0 && row < field.length
                && col >= 0 && col < field[0].length;
        }
    }
}
// solver([
//     '5 10 15 20',
//     '10 10 15 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1'
// ])
solver([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2, 0,1'
])
