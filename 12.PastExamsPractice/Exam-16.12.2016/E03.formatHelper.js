function solver(arr) {
    const regexSignsAfter = /(?: *)([.,!?:;])(?: *)/g;
    let stringToLog = arr[0];

    function signReplacer(match, $1) {
        return "" + $1 + " ";

    }

    stringToLog = stringToLog.replace(regexSignsAfter, signReplacer);
    function regexSignsBefore(match, $1) {
        return "" + $1 + " ";
    }

    stringToLog = stringToLog.replace(regexSignsAfter, regexSignsBefore);


    const regexMultipleDots = / *[.] *[.] *[.] *([?!\s])/g;

    function multipleDotsReplacer(match, $1) {
        // console.log($1)
        return '...' + $1;
    }
    stringToLog = stringToLog.replace(regexMultipleDots, multipleDotsReplacer);

    const regexDotsForDigits = /([.] +)(?=[\d]+)/g;

    function dotsForDigitsReplacer() {
        return '.';
    }

    stringToLog = stringToLog.replace(regexDotsForDigits, dotsForDigitsReplacer);

    const regexQuotes = /(?:["])([^"]*?)(?:["])/g;

    function textInQuotesReplacer(match, $1) {
        return '"' + $1.trim() + '"';
    }

    stringToLog = stringToLog.replace(regexQuotes, textInQuotesReplacer);

    console.log(stringToLog);
}
solver([
    'Now let\'s test           , absolutely everything!Aposiopesis is this: ...Have! you read the constraints?, you squidward? It would be pretty sad if this also fails "         !It would be bad if you don\'t put space after the explanation at start,aposiopesis all the way...". Now; 8   . 1 3. 0x041       .   I hope this will be trimmed too     !'
]);
// solver(['Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 .']);
// solver(['Make,sure to give:proper spacing where   ;   is needed...   0 .  234 Terribly formatted text      .  With chaotic spacings." Terrible quoting   "   ! Also this date is pretty confusing : 20   .   12.  16 .    ']);