function solver(arr) {
    let commands = {
        'add' : function (element, arr) {
            arr.push(element);
            return arr;
        },
        // 'add' : (element, arr) => arr.push(element), // this doesn't work
        'remove' : (element, arr) => arr.slice(0, -1)
    };
    let outputArr = [];
    let element = 1;
    for(let i = 0; i<arr.length; i++){
        if(commands.hasOwnProperty(arr[i])){
            outputArr = commands[arr[i]](element, outputArr);
        }
        element++;
    }

    return outputArr.length>0 ? outputArr.join('\n') : 'Empty';
}
// console.log(solver([
//     'add',
//     'add',
//     'add',
//     'add'
// ]));
// console.log(solver([
//     'add',
//     'remove'
// ]));

console.log(solver([
    'add',
    'add',
    'remove',
    'add',
    'bla',
    'add'
]));