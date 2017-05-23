function solver(string) {
    let num = Number(string);
    let output = "";
    for(let i = 1; i<=num; i++){
        output += String(i);
    }
    console.log(output);
}
solver('11');