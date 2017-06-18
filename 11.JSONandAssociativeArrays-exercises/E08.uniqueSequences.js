function solver(arr) {



    // arr = arr.map(function (e) {
    //     e = e.replace('[', '').replace(']', '');
    //     return e.split(', ').map(Number)
    // });
    // let length = arr.length;
    // for(let i = 0; i<length; i++){
    //     let arrayElement = arr[i];
    //     arr[i] = [];
    //     arr = removeSameArrays(arrayElement, arr);
    //
    // }
    // arr = arr.filter(function (e) {
    //     return e.length>0;
    // });
    // arr.sort(function (a, b) {
    //     return a.length - b.length
    // });
    //
    // arr.forEach(function (e) {
    //     console.log(`[${e.sort(function (a, b) {
    //         return b-a;
    //     }).join(', ')}]`);
    // });
    //
    //
    // function removeSameArrays(arrayElement, arrayOfArrays) {
    //     let arrayElementSum = arrayElement.reduce(function (acc, curr) {
    //         return acc +=curr;
    //     }, 0);
    //     // let isUnique = true;
    //     for(let i = 0; i<arrayOfArrays.length; i++){
    //         let arraySum = arrayOfArrays[i].reduce(function (acc, curr) {
    //             return acc +=curr;
    //         }, 0);
    //         if(arrayElementSum == arraySum){
    //             arrayOfArrays[i] = [];
    //             // isUnique = false;
    //         }
    //     }
    //     // if(isUnique){
    //         arrayOfArrays.push(arrayElement);
    //     // }
    //
    //     return arrayOfArrays;
    // }
}
// solver([
//     '[-3, -2, -1, 0, 1, 2, 3, 4]',
//     '[10, 1, -17, 0, 2, 13]',
//     '[4, -3, 5, 7, -2, 2, -1, 1, 0]',
// ])
// solver([
//     '[-3, -2, -1, 0, 1, 2, 3, 4]',
//     '[10, 1, -17, 0, 2, 13]',
//     '[4, -3, 3, -2, 2, -1, 1, 0]'
// ])
// solver([
//     '[7.14, 7.180, 7.339, 80.099]',
//     '[7.339, 80.0990, 7.140000, 7.18]',
//     '[7.339, 7.180, 7.14, 80.099]',
// ])


function checkForSequences(input) {
    let sequences = new Map;

    for (let arr of input) {
        let a = JSON.parse(arr).map(Number).sort((a, b) => b - a);
        let sequence = `[${a.join(', ')}]`;
        if (!sequences.has(sequence)) {
            sequences.set(sequence, a.length);
        }
    }
    // console.log(sequences);
    console.log([...sequences.keys()].sort((a, b) => sequences.get(a) - sequences.get(b)).join('\n'));
}

checkForSequences([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]',
])
