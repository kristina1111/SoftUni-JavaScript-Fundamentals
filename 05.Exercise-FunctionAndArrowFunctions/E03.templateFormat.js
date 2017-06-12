function printTemplate(arr) {
    let xmlTemplate = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for(let i = 1; i<arr.length; i+=2){
        xmlTemplate += '  <question>\n    ';
        xmlTemplate += `${arr[i-1]}\n`;
        xmlTemplate += '  </question>\n  <answer>\n    ';
        xmlTemplate += `${arr[i]}\n`;
        xmlTemplate += '  </answer>\n';
    }
    xmlTemplate += '</quiz>';

    return xmlTemplate;
}
console.log(printTemplate(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]));