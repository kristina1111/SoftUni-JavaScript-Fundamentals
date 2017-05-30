function printMultiplicationTable(size) {
    let tableHtml = '<table border="1">\n';
    for(let row = 0; row<=size; row++) {
        tableHtml += ' <tr>';
        for(let col = 0; col<=size; col++){
            if(row == 0){
                tableHtml += '<th>';
                if(col == 0){
                    tableHtml += 'x';
                }else{
                    tableHtml += col;
                }
                tableHtml += '</th>';
            }else{
                if(col==0){
                    tableHtml += `<th>${row}</th>`;
                }else{
                    tableHtml += `<td>${row*col}</td>`;
                }
            }
        }
        tableHtml += '</tr>\n';
    }
    tableHtml += '</table>';

    return tableHtml;
}

console.log(printMultiplicationTable(5));