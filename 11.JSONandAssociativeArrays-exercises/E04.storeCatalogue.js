function solver(arr) {
    let catalogue = [];
    arr.forEach(function (e) {
        e = e.split(' : ').filter(function (e) {
            return e !=='';
        });
        catalogue.push({
            name : e[0],
            price : Number(e[1])
        });
    });
    catalogue.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    let letter = catalogue[0].name[0].toUpperCase();
    console.log(letter);
    catalogue.forEach(function (e) {
        if(letter != e.name[0].toUpperCase()){
            letter = e.name[0].toUpperCase();
            console.log(letter);
        }

        console.log(`  ${e.name}: ${e.price}`);
    });
}
// solver([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);
solver([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
])