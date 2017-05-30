function solver(a, b, c) {
    let discriminant = b**2 - 4*a*c;
    if(discriminant>0){
        let resultArr = [];
        resultArr.push((-b + Math.sqrt(discriminant))/(2*a));
        resultArr.push((-b - Math.sqrt(discriminant))/(2*a));
        resultArr.sort(
            (a,b)=>a>b
        ).map(
            a => console.log(a)
        );
    }else if(discriminant == 0){
        console.log(-b/(2*a));
    }else{
        console.log('No');
    }
}
solver(5,2,1)