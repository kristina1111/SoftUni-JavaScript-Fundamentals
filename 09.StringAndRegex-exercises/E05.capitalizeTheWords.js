function capitalizeFirstLetterOfEachWord(string) {
    string = string.toLowerCase();
    const regex = /\b[a-zA-Z]/gm;

    function lowerToUpper(match) {
        return match.toUpperCase();
    }

    return string.replace(regex, lowerToUpper)
}

console.log(capitalizeFirstLetterOfEachWord('Capitalize these words'));


function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
        return (offset ? '-' : '') + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}