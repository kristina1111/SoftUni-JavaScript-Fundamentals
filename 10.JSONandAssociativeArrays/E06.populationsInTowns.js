function solver(arr) {
    let map = new Map();
    arr.forEach(function (e) {
        let info = e.split('<->');
        if(map.has(info[0].trim())){
            map.set(info[0].trim(), map.get(info[0].trim()) + Number(info[1].trim()));
        }else{
            map.set(info[0].trim(), Number(info[1].trim()));
        }
    });
    function logMapElements(value, key) {
        console.log(`${key} : ${value}`);
    }

    map.forEach(logMapElements);
}
solver([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'New York <-> 1'
]);