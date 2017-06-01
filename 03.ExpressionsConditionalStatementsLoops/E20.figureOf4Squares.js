function printSquare(number){
    let numRows = number%2==0 ? number-1 : number;
    let numChars = 2*number-1;
    let result = "";
    for(let row = 1; row<=numRows; row++){
        if(row == 1 || row == numRows || row == Math.ceil(numRows/2)){
            for(let col = 1; col<=numChars; col++){
                if(col == 1 || col == Math.ceil(numChars/2) || col == numChars){
                    result += '+';
                }else {
                    result += '-';
                }
                result += col == numChars ? '\n' : "";
            }
        }else{
            for(let col = 1; col<=numChars; col++){
                if(col == 1 || col == Math.ceil(numChars/2) || col == numChars){
                    result += '|';
                }else {
                    result += ' ';
                }
                result += col == numChars ? '\n' : "";
            }
        }

    }
    console.log(result);
}

printSquare(7);