function solver(arr) {
    let regex = [
        /(\*[A-Z][A-Za-z]*)(?=\s|$)/gm,
        /(\+[0-9-]{10})(?=\s|$)/gm,
        /(\![a-zA-Z0-9]+)(?=$|\t|\s)/gm,
        /(\_[a-zA-Z0-9]+)(?=\s|$)/gm,
    ];
    // const regexName = /(\*[A-Z][a-z]*)(?=$|\t|\s)/gm;
    // const regexPhone = /(\+[0-9-]{10})(?=$|\t|\s)/gm;
    // const regexId = /(\![a-zA-Z0-9]+)(?=$|\t|\s)/gm;
    // const regexBaseName = /(\_[a-zA-Z0-9]+)(?=$|\t|\s)/gm;

    for(let i = 0; i<arr.length; i++){
        regex.forEach(function (r) {
            arr[i] = arr[i].replace(r, replaceData);
        });
    }
    // arr.forEach(function (e) {
    // // arr.map(function (e) {
    //     regex.forEach(function (r) {
    //         e = e.replace(r, replaceData);
    //     });
    //     // console.log(e);
    //
    //
    //     // let matchesNames = e.match(regexName) || [];
    //     // matchesNames.forEach(function (m) {
    //     //     console.log(m);
    //     // })
    //     // let matchesPhone = e.match(regexPhone);
    //     // let matchesId = e.match(regexId);
    //     // let matchesBaseName = e.match(regexBaseName);
    // });

    return arr.join('\n');
    
    function replaceData(match, $1) {
        // console.log($1.length);
        return '|'.repeat($1.length);
    }
}
console.log(solver([
    'Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'
]));