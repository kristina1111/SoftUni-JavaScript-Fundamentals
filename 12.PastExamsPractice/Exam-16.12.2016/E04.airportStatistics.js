function solver(arr) {
    let departed = new Set();
    let landed = new Set();
    let planes = [];
    let towns = [];
    arr.forEach(function (e) {
        e = e.split(' ');
        if(e[3] == 'land'){
            if(!landed.has(e[0])){
                landed.add(e[0]);
                departed.delete(e[0]);
                if(towns.hasOwnProperty(e[1])){
                    towns[e[1]].arrivals += Number(e[2]);

                }else{
                    towns[e[1]] = {
                        name : e[1],
                        arrivals : Number(e[2]),
                        departures: 0,
                        flights : new Set()
                    };
                }
                towns[e[1]].flights.add(e[0]);
            }
        }else{
            if(landed.has(e[0])){
                landed.delete(e[0]);
                departed.add(e[0]);
                if(towns.hasOwnProperty(e[1])){
                    towns[e[1]].departures += Number(e[2]);

                }else{
                    towns[e[1]] = {
                        name : e[1],
                        arrivals : 0,
                        departures: Number(e[2]),
                        flights : new Set()
                    };
                }
                towns[e[1]].flights.add(e[0]);
            }
        }
    });

    let sortableArrayTowns = [];
    for(let el in towns){
        sortableArrayTowns.push(towns[el]);
    }

    console.log('Planes left:');
    Array.from(landed)
        .sort((a, b) => a.localeCompare(b))
        .forEach((e) => console.log(`- ${e}`));
    sortableArrayTowns
        .sort(function(a, b) {
            if(a.arrivals - b.arrivals == 0){
                return a.name.localeCompare(b.name);
            }
            return b.arrivals - a.arrivals;
        })
        .forEach(function (e) {
            console.log(e.name);
            console.log(`Arrivals: ${e.arrivals}`);
            console.log(`Departures: ${e.departures}`);
            console.log('Planes:');
            Array.from(e.flights).sort(function (a, b) {
                return a.localeCompare(b);
            }).forEach(function (f) {
                console.log(`-- ${f}`)
            })
        });

}

solver([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 WashingtonACDC 272 land",
    "ATR72 Madrid 135 depart"
]);
// solver([
//     "Airbus Paris 356 land",
//     "Airbus London 321 land",
//     "Airbus Paris 213 depart",
//     "Airbus Ljubljana 250 land"
// ]);