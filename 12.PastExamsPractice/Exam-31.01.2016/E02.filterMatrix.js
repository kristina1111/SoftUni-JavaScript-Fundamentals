function solver(arr) {
    let neededSeq = Number(arr.pop());
    let workingArray = arr.reduce((acc, curr) => acc +' ' + curr);
    arr = arr.map(function (e) {
        return e.split(' ');
    });
    workingArray = workingArray.split(' ').filter((e) => e!=='');

    let cntSeq = 0;
    let prevElement = workingArray[0];
    for(let i = 0; i<workingArray.length; i++){
        if(prevElement == workingArray[i]){
            cntSeq++;
            if(neededSeq == cntSeq){
                prevElement = workingArray[(i + 1) <workingArray.length ? (i+1) : i];
                workingArray = changeElementsInArray(workingArray, i, cntSeq);
                cntSeq = 0;
            }
            continue;
        }
        prevElement = workingArray[i];
        cntSeq = 1;
    }

    // console.log(workingArray);
    let outputArr = [];

    for(let row = 0, cnt = 0; row<arr.length; row++){
        outputArr[row] = [];
        for(let col = 0; col<arr[row].length; col++, cnt++){
            if(workingArray[cnt] != 'false'){
                outputArr[row][col] = workingArray[cnt];
            }
        }
    }
    outputArr = outputArr.map(function (e) {
        return e.filter((e)=> e!=='')
    });

    outputArr.forEach(function (e) {
        if(e.length>0){
            console.log(e.join(' '));
            return;
        }
        console.log('(empty)')
    });

    // console.log(outputArr);

    function changeElementsInArray(array, index, sequence) {
        for(let i = index; i>=index-sequence+1; i--){
            array[i] = 'false';
        }
        return array;
    }

}

// solver(['3 3 3 2 5 9 9 9 9 1 2',
//     '1 1 1 1 1 2 5 8 1 1 7',
//     '7 7 1 2 3 5 7 4 4 1 2',
//     '2']);
// solver([ '1 2 3 3', '3 5 7 8', '3 2 2 1', '3' ]);
// solver([ '2 1 1 1', '1 1 1', '3 7 3 3 1', '2' ]);
solver([ '1 2 3 3 2 1', '5 2 2 1 1 0', '3 3 1 3 3', '2' ]);