function solver(arr){
    let obj = {};
    for(let i = 1; i<arr.length; i+=2){
        obj[arr[i-1]] = arr[i];
    }

    return obj;
}

console.log(solver(['name', 'Pesho', 'age', '23', 'gender']));
