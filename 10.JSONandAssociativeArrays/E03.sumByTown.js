function solver(arr) {
    let obj = {};
    for(let i = 1; i<arr.length; i+=2){
        if(obj.hasOwnProperty(arr[i-1])){
            obj[arr[i-1]] += Number(arr[i]);
            continue;
        }
        obj[arr[i-1]] = Number(arr[i]);
    }
    return JSON.stringify(obj);
}
console.log(solver([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]));