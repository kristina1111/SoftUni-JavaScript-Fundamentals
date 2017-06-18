function solver(arr) {
    let html = '<table>\n';

    arr.forEach(function (e) {
        e = JSON.parse(e);
        html += `\t<tr>\n`;
        for(let key in e){
            html += `\t\t<td>${escapeHtml(e[key])}</td>\n`;
        }
        html += `\t<tr>\n`;
    });

    html += '</table>';

    return html;

    function escapeHtml(input) {
        input = input.toString();
        let forbidden = ["&", "<", ">", '"', '\''];
        let allowed = ["&amp;", "&lt;", "&gt;", "&quot;", "&#39;"];

        for(let i = 0; i<forbidden.length; i++){
            input = input.split(forbidden[i]).join(allowed[i]);
        }
        return input;
    }
}
console.log(solver([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]));