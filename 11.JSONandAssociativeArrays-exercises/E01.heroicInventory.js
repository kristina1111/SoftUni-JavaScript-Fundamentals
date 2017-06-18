function solver(arr) {
    let arrHeroes = [];
    arr.forEach(function (e) {
        e = e.split(' / ').filter(function (el) {
            return el !== '';
        });
        arrHeroes.push({
            name : e[0],
            level : Number(e[1]),
            items : []
        });
        if(e.length>2){
            e[2] = e[2].split(', ').filter(function (el) {
                return el !== '';
            });
            e[2].forEach(function (e) {
                arrHeroes[arrHeroes.length-1].items.push(e);
            })
        }
    });

    console.log(JSON.stringify(arrHeroes));
}
solver([
    'Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);