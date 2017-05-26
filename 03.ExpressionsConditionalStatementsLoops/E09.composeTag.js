function printTag(arr) {
    let [fileLocation, alternateText] = arr;
    let html = `<img src="${fileLocation}" alt="${alternateText}">`;
    return html;
}

console.log(printTag(['smiley.gif', 'Smiley Face']));