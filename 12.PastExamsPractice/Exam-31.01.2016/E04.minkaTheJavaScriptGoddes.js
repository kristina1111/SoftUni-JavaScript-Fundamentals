function solver(arr) {
    let register = {};
    arr.forEach(function (e) {
        e = e.split('&').filter(e => e!=='').map(e => e.trim());
        let taskName = 'Task ' + e[2];
        if(!register.hasOwnProperty(taskName)){
            register[taskName] = {
                tasks: [],
                average : 0,
                scores : [],
                setAverageScore : function (array) {
                    this.average = parseFloat((array.reduce((acc, curr) => acc + curr) / array.length).toFixed(2));
                },
                lines : 0
            };
        }
        register[taskName].tasks.push({
            name : e[0],
            type : e[1]
        });
        register[taskName].scores.push(Number(e[3]));
        register[taskName].setAverageScore(register[taskName].scores);
        register[taskName].lines += Number(e[4].trim());

    });

    let sortedRegister = sortAssociativeArray(register);
    // console.log(register);
    console.log(JSON.stringify(sortedRegister));

    function sortAssociativeArray(array) {
        // turn associative array to sortable array
        let sortableArr = [];
        for(let key in array){
            sortableArr.push([key, array[key]]);
        }

    //  main sorting of the objects
        sortableArr.sort(function (a, b) {
            a = a[1];
            b = b[1];

            // sorting property of each object by criteria
            a.tasks.sort(function (t1, t2) {
                return t1.name.localeCompare(t2.name);
            });

            b.tasks.sort(function (t1, t2) {
                return t1.name.localeCompare(t2.name);
            });

            if(a.average - b.average == 0){
                return a.lines - b.lines;
            }

            return b.average - a.average
        });

    //    turn sortable array back to associative array
        let associativeArray = {};
        for(let i = 0; i<sortableArr.length; i++){
            let key = sortableArr[i][0];
            let value = sortableArr[i][1];
            // needed because it shouldn't be in the output  - Judge wants that! :)
            delete value.scores;

            associativeArray[key] = value;
        }
        return associativeArray;
    }
}

solver([ 'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81' ])