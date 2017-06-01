function printSquare(number) {
    let output = "";
    for(let row = 0; row<number; row++){
        for(let col = 0; col<number; col++){
            if(col==number-1){
                output += '*\n';
            }else{
                output += '* '
            }
        }
    }
    return output;
}
console.log(printSquare(2));