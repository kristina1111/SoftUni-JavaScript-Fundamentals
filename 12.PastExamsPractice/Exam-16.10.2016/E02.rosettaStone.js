function solver(arr) {
    let templateRows = Number(arr.shift());
    let templateMatrix = [];
    while (templateRows--){
        templateMatrix.push(arr.shift().split(' ').map(Number))
    }
    let messageMatrix = arr.map(function (e) {
        return e.split(' ').map(Number);
    });

    let outputMessage = "";
    for(let row = 0; row<messageMatrix.length; row++){
        for(let col = 0; col<messageMatrix[row].length; col++){
            messageMatrix[row][col] += templateMatrix[row%templateMatrix.length][col%templateMatrix[row%templateMatrix.length].length];
            messageMatrix[row][col] = String.fromCharCode(messageMatrix[row][col]%27 == 0 ? 32 : messageMatrix[row][col]%27 + 64);
            outputMessage += messageMatrix[row][col];
        }
    }

    console.log(outputMessage.trim());
    // console.log(messageMatrix);
}
// solver([ '2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22' ])

solver([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ])