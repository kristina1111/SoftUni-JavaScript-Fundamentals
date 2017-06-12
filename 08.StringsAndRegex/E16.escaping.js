function solver(input) {
    let forbidden = ["&", "<", ">", '"'];
    let allowed = ["&amp;", "&lt;", "&gt;", "&quot;"];

    let html = "<ul>\n";

    input.forEach(function (line) {
        html += "  <li>";
        for(let i in forbidden) {
            line = line.split(forbidden[i]).join(allowed[i]);
        }
        html += line + "</li>\n";
    });

    html += "</ul>";

    return html;
}
console.log(solver(['<b>unescaped text</b>', 'normal text']));