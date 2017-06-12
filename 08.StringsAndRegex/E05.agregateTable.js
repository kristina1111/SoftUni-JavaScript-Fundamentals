function solver(arr) {
    // first way to process the input arr
    arr = arr.map(function (e) {
        return e.split('|')
            .filter(function (innerE) {
                return innerE !== "";
            })
            .map(function (innerE) {
                return innerE.trim();
            })
    });


    // second way to process the input arr

    // let outcomeArr = [];
    // for(let i = 0; i<arr.length; i++){
    //     outcomeArr.push(arr[i].split('|')
    //         .filter(function (e) {
    //         return e!== "";
    //     })
    //         .map(function (e) {
    //             return e.trim();
    //         })
    //     )
    // }
    // console.log(outcomeArr);

    let stringCities = "";
    let totalSum = 0;
    arr.forEach(function (e) {
        stringCities += e[0] + ", ";
        totalSum += Number(e[1]);
    });
    console.log(stringCities.slice(0, -2));
    console.log(totalSum);

}
solver(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);