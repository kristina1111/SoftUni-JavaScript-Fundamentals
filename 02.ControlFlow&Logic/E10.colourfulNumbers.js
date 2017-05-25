function printColourfulNumbers(number) {
    let output = '<ul>\n';
    for(let i = 1; i<=number; i++){
        output += `  <li><span style='color:${i%2==0 ? 'blue' : 'green'}'>${i}</span></li>\n`
    }
    output += '</ul>';
    return output;
}
console.log(printColourfulNumbers(5));