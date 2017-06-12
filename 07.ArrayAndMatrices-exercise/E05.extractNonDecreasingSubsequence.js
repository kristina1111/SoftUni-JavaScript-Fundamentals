function solver(arr) {
    // let outputArr = [arr[0]];
    console.log(arr[0]);
    for(let i = 1, currentHighest = arr[0]; i<arr.length; i++){
        if(arr[i]>=currentHighest){
            currentHighest = arr[i];
            console.log(currentHighest);
            // outputArr.push(currentHighest);
        }
    }
    // return outputArr;
}

solver([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);