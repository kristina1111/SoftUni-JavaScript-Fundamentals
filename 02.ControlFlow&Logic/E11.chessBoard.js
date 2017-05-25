function getChessBoard(number) {
    let html = '<div class="chessboard">\n';

    for(let row = 0; row<number; row++){
        html += '<div>\n';

        for(let col = 0; col<number; col++){
            html += `<span class="${(row+col)%2==0 ? 'black' : 'white'}"></span>\n`;
        }

        html += '</div>\n';
    }

    html += '</div>';

    return html;
}

console.log(getChessBoard(5));