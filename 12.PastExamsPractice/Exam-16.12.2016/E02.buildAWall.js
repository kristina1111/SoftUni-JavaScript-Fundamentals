function solver(arr) {
    const cubicYardConcrete = 195;
    const cubicYardPrice = 1900;
    arr = arr.map(Number);
    let concreteUsedDaily = [];
    let length = arr.length;
    while (arr.reduce(function (acc, curr) {
        return acc + curr
    }, 0) < 30*length){
        let cnt = 0;
        for(let i = 0; i<length; i++){
            if(arr[i] < 30){
                arr[i]++;
                cnt++;
            }
        }
        concreteUsedDaily.push(cnt*cubicYardConcrete);
    }
    let price = concreteUsedDaily.reduce((acc, curr) => acc + curr)*cubicYardPrice;
    console.log(concreteUsedDaily.join(', '));
    console.log(`${price} pesos`);

}
// solver([ '21', '25', '28' ]);
// solver(['17']);
solver(['17', '22', '17', '19', '17'])