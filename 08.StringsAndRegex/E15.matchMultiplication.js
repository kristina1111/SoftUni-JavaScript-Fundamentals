function solver(string) {
    const regex = /(^| )(-?\d+)\s{0,}\*\s{0,}(-?\d+(\.\d+)?)(?=$| )/gm;
    function replaceWithResultValue(match, $1, $2, $3) {
        return $1 + (Number($2) * Number($3)).toString();
    }

    return string.replace(regex, replaceWithResultValue)
}

function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match) {
        return match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
// console.log(styleHyphenFormat('AlaSKA'));

console.log(solver('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'));