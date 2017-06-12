function solver(arr) {
    let productsMap = new Map();
    arr.forEach(function (e) {
        e = e.split(' | ');
        if(productsMap.has(e[1])){
            if(productsMap.get(e[1]).town == e[0]){
                productsMap.get(e[1]).price = Number(e[2]);
            }else{
                if(productsMap.get(e[1]).price > Number(e[2])){
                    productsMap.get(e[1]).town = e[0];
                    productsMap.get(e[1]).price = Number(e[2])
                }
            }
        }else{
            productsMap.set(e[1], {
                name : e[1],
                town : e[0],
                price : Number(e[2])
            })
        }
    });

    function logEachElement(value, key) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }

    productsMap.forEach(logEachElement)
}
// solver([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'Sample Town | Sample Product | 100',
//     'New York | Burger | 10',
//     'New York | Burger | 100'
// ]);
solver([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
])