function isPrimeNumber(number) {
    let border = Math.ceil(Math.sqrt(number));

    if(number<=1){
        return false;
    }else if(number==2){
        return true;
    }else{
        for(let i = 2; i<=border; i++){
            if(number%i == 0){
                return false
            }
        }
        return true;
    }
}

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(6));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(8));
console.log(isPrimeNumber(9));