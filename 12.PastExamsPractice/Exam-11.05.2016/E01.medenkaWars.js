function solver(arr) {
    const damage = 60;
    const parameters = {
        'dark' : {
            consecutiveNeeded : 5,
            multiplier : 4.5
        },
        'white' : {
            consecutiveNeeded : 2,
            multiplier : 2.75
        }
    };

    let contestants = {
        'white': {
            name: 'Vitkor',
            consecutive: [],
            dealtDamage: 0
        },
        'dark': {
            name: 'Naskor',
            consecutive: [],
            dealtDamage: 0
        }
    };

    arr = arr.map(function (e) {
        return e.split(' ');
    });
    let previous = {
        'white' : Number(arr[0][0]),
        'dark' : Number(arr[0][0])
    };
    arr.forEach(function (e) {
        if(e == ''){
            return;
        }
        if(Number(e[0]) == previous[e[1]]){
            contestants[e[1]].consecutive.push(Number(e[0]));
            if(contestants[e[1]].consecutive.length == parameters[e[1]].consecutiveNeeded){
                contestants[e[1]].dealtDamage += Number(e[0])*damage * parameters[e[1]].multiplier;
                contestants[e[1]].consecutive = [];
            }else{
                contestants[e[1]].dealtDamage += Number(e[0])*damage;
            }
        }else{
            previous[e[1]] = Number(e[0]);
            // contestants[e[1] == 'dark' ? 'white' : 'dark'].consecutive = [];
            contestants[e[1]].consecutive.push(Number(e[0]));
            contestants[e[1]].dealtDamage += Number(e[0])*damage;
        }
    });
    let sortedContestants = [];
    for(let key in contestants){
        sortedContestants.push(contestants[key]);
    }
    sortedContestants.sort(function (a, b) {
        return b.dealtDamage - a.dealtDamage
    });
    // console.log(sortedContestants);
    console.log(`Winner - ${sortedContestants[0].name}`);
    console.log(`Damage - ${sortedContestants[0].dealtDamage}`)
}
solver([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
]);
solver([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
]);