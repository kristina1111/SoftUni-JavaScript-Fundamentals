function solver(arr) {
    let register = [];
    arr.forEach(function (e) {
        if(e.indexOf('-')==-1){
            if(!register.hasOwnProperty(e)){
                register[e] = {
                    name: e,
                    subscribers: new Set(),
                    following : new Set()
                }
            }
        }else{
            e = e.split('-');
            if(register.hasOwnProperty(e[0]) && register.hasOwnProperty(e[1])
            && e[0] !== e[1]){
                register[e[0]].following.add(e[1]);
                register[e[1]].subscribers.add(e[0]);
            }
        }
    });
    let sortableArr = [];
    for(let key in register){
        sortableArr.push(register[key])
    }
    sortableArr = sortableArr.sort(function (a, b) {
        if(a.subscribers.size - b.subscribers.size == 0){
            if(a.following.size - b.following.size !== 0){
                return b.following.size - a.following.size;
            }
        }
        return b.subscribers.size - a.subscribers.size;
    });
    // console.log(register);
    // console.log();
    console.log(sortableArr[0].name);
    let cnt = 1;
    [...sortableArr[0].subscribers].forEach(function (e) {
        console.log(`${cnt}. ${e}`);
        cnt++;
    })

}
solver([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-D',
    'B-A',
    'C-A',
    'D-B',
    // 'C-B'
])
// solver([
//     'J',
//     'G',
//     'P',
//     'R',
//     'C',
//     'J-G',
//     'G-J',
//     'P-R',
//     'R-P',
//     'C-J'
// ])