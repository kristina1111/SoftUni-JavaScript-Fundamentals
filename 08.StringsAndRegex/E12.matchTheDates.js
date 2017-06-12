function solver(arr) {
    // const regex = /(?:^| )([\d]{1,2})-([\w]{3})-([\d]{4})/gm;
    // const regex = /\b([\d]{1,2})-([A-Za-z]{3})-([\d]{4})\b/gm;
    const regex = /\b([\d]{1,2})-([A-Z][a-z]{2})-([\d]{4})\b/gm;
    arr.forEach(function (e) {
        let m;
        while ((m = regex.exec(e)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            console.log(`${m[0]} (Day: ${m[1]}, Month: ${m[2]}, Year: ${m[3]})`);

        }
    })
}
// solver([
//     'I am born on 30-Dec-1994.',
//     'This is not date: 512-Jan-1996.',
//     'My father is born on the 29-Jul-1955.'
// ]);
solver([
    '( 1-Jan-1999 is a valid date.',
    '    So is 01-Jul-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.'
]);