function solver(arr) {
    // return Boolean(0);
    arr = arr.sort(function (a, b) {
        // if(isNumber(a) && isNumber(b)){
        //
        // }
        if(a.length-b.length==0){
            // return a[0]>b[0];
            return a>b;
        }
        return a.length-b.length;
        // console.log(a[0]-b[0]);
        // return a[0]>b[0];
        // console.log(isNumber(a));
    });
    return arr.join('\n');
}
// console.log(solver([
//     'alpha',
//     'beta',
//     'gamma'
// ]));
//
// console.log(solver([
//     'Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George'
// ]));

console.log(solver([
    'test',
    'Deny',
    // 'Dany',
    'omen',
    'Default'
]));