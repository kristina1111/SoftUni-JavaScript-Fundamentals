function printTriangle(number) {
    let output = "";
    for(let row = 0, cnt = 0; row<number*2-1; row++){
        if(row <number){
            cnt++;
        }else{
            cnt--;
        }
        output += '*'.repeat(cnt) + '\n';
    }
    return output;
}

console.log(printTriangle(2));