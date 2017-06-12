function solver(arr) {
    const regex = /[\w]+/mg;
    let obj = {};
    arr.forEach(function (e) {
        let matches = e.match(regex) || [];
        matches.forEach(function (m) {
            if(obj.hasOwnProperty(m)){
                obj[m] += 1;
            }else{
                obj[m] = 1;
            }
        })
    });
    return JSON.stringify(obj);
}
console.log(solver([
    'JS devs use Node.js for server-side JS.-- JS for devs'
]));