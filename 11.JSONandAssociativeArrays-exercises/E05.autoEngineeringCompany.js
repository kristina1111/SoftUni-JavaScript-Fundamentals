function solver(arr) {
    let register = new Map();
    arr.forEach(function (e) {
        e = e.split(' | ').filter(function (e) {
            return e!=='';
        });

        if(register.has(e[0])){
            if(register.get(e[0]).has(e[1])){
                register.get(e[0]).set(e[1], register.get(e[0]).get(e[1]) + Number(e[2]))
            }else{
                register.get(e[0]).set(e[1], Number(e[2]));
            }
        }else{
            register.set(e[0], new Map());
            register.get(e[0]).set(e[1], Number(e[2]));
        }

    });
    register.forEach(function (value, key) {
        console.log(key);
        value.forEach(function (valueIn, keyIn) {
            console.log(`###${keyIn} -> ${valueIn}`)
        })
    });
}
solver([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);