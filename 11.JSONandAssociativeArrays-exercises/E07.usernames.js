function solver(arr) {
    let sortableArr = [];
    arr.forEach(function (e) {
        let inArray = true;
        sortableArr.forEach(function (inE) {
            if(e===inE){
                inArray = false;
            }
        });
        if(inArray){
            sortableArr.push(e);
        }
    });
    sortableArr.sort(function (a, b) {
        if(a.length === b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length
    });
    console.log(sortableArr.join('\n'));
}
// solver([
//     'Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston'
// ])
solver([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
])