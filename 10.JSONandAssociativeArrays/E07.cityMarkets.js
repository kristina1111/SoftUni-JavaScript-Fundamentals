function solver(arr) {
    let salesMap = new Map();
    arr.forEach(function (e) {
        e = e.split(' -> ').filter(function (el) {
            return el !== '';
        });
        e[2] = e[2].split(' : ').filter(function (el) {
            return el !== '';
        });
        // console.log(e);
        if (salesMap.has(e[0])) {
            let hasSuchProduct = true;
            let length = salesMap.get(e[0]).length;
            for (let i = 0; i < length; i++) {
                if (salesMap.get(e[0])[i].name == e[1]) {
                    salesMap.get(e[0])[i].sales += Number(e[2][0]) * Number(e[2][1]);
                    hasSuchProduct = false;
                    break;
                }
            }

            if(hasSuchProduct){
                salesMap.get(e[0]).push({
                    name: e[1],
                    sales: Number(e[2][0]) * Number(e[2][1])
                });
            }

            // console.log(salesMap.get(e[0])[0].name);
        } else {
            salesMap.set(e[0], []);
            salesMap.get(e[0]).push({
                name: e[1],
                sales: Number(e[2][0]) * Number(e[2][1])
            });
        }
        // console.log(e);
    });

    function logEachElement(value, key) {
        console.log(`Town - ${key}`);
        value.forEach(function (e) {
            console.log(`$$$${e.name} : ${e.sales}`);
        });
    }

    salesMap.forEach(logEachElement);
    // console.log(salesMap)
}
solver([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
])