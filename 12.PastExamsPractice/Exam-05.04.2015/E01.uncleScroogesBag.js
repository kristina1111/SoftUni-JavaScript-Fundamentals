function solver(arr) {
    console.log(isIn)
    let totalCoins = 0;
    arr.forEach(function (e) {
        if(e==''){
            return;
        }
        e = e.toLowerCase().split(' ').filter(e => e!=='');
        if(e[0]!== 'coin'){
            return;
        }
        if(isValidNumber(e[1])){
            totalCoins += Number(e[1]);
        }
    });

    let goldenCoins = Math.floor(totalCoins/100);
    let silverCoins = Math.floor((totalCoins%100)/10);
    let bronzeCoins = totalCoins%100%10;

    console.log(`gold : ${goldenCoins}`);
    console.log(`silver : ${silverCoins}`);
    console.log(`bronze : ${bronzeCoins}`);


    function isValidNumber(input) {
        if(isNaN(input)){
            return false
        }
        if(input.indexOf('.') != -1){

            if(Number(input.slice(input.indexOf('.')+1)) > 0){
                return false;
            }
        }
        return Number(input)>0;
    }
}

solver([
    'coin 10001',
    'coin 200.0',
    'coin -5',
    'coin 10.50',
    'coin 2002.00',
    'coin fifty',
    'coin -100',
    'cigars 1',
])

// solver([ 'Coin 1',
//     'coin 2',
//     'coin 5',
//     'coin 10',
//     'coin 20',
//     'coin 50',
//     'coin 100',
//     'coin 200',
//     'coin 500',
//     'cigars 1' ]);

// solver([ 'Coin one',
//     'coin two',
//     'coin five',
//     'coin ten',
//     'coin twenty',
//     'coin fifty',
//     'coin hundred',
//     'cigars 1' ]);
//
// solver([ 'coin 1 ',
//     'coin two',
//     'coin 5',
//     'coin 10.50',
//     'coin 20',
//     'coin 50',
//     'coin hundred',
//     'cigars 1' ]);