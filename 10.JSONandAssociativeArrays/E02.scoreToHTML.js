function solver(inputString) {
    let html = '<table>\n  <tr>';
    let json = JSON.parse(inputString);
    Object.keys(json[0]).forEach(function (k) {
        html += `<th>${k}</th>`;
    });
    html += '</tr>\n';
    json.forEach(function (j) {
        html += '   <tr>';
        Object.keys(j).forEach(function (key) {
            html += `<td>${escapeHtml(j[key])}</td>`;
        });
        html += '</tr>\n';
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
// console.log(solver('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));

// console.log(solver('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));

// console.log(solver(
//     '[{"name":"<div>a && \'b\'</div>","score":111},{"name":"Jichka Jochkova","score":-50}]'
// ));

console.log(solver(
    '[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
));

