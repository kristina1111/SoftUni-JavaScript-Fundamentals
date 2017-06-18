function solver(arr) {
    arr = arr.map(Number);
    let greatestProduct = Number.MIN_SAFE_INTEGER;
    let count = arr.shift();
    while (arr.length>0){
        if(count<10 && count>0){
            let currProduct = 1;
            for(let i = 0; i<Math.min(count, arr.length); i++){
                currProduct *= arr[i];
            }
            greatestProduct = Math.max(greatestProduct, currProduct);
        }

        count = arr.shift();
    }
    console.log(greatestProduct);
}
// solver([
//     '10',
//     '20',
//     '2',
//     '30',
//     '44',
//     '3',
//     '56',
//     '20',
//     '24'
// ]);
// solver([
//     '100',
//     '200',
//     '2',
//     '3',
//     '2',
//     '3',
//     '2',
//     '1',
//     '1'
// ]);
solver([
    '1',
    '10000',
    '2',
    '2',
    '10000'
])