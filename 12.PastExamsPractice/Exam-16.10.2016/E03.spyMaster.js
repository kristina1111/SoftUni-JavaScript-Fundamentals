function solver(arr) {
    "use strict";
    let specialKey = arr.shift();
    let pattern = getCaseInsensitivePattersForString(specialKey);
    let regex = new RegExp('((?: |^)' + pattern + '[ ]+)([!%$#A-Z]{8,})( |\\.|\,|$)', 'g');

    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i].replace(regex, replacer)
    }

    console.log(arr.join('\n'));

    function getCaseInsensitivePattersForString(inputString) {
        let pattern = "";
        for(let i = 0; i<inputString.length; i++){
            pattern += `[${inputString[i].toLowerCase()}${inputString[i].toUpperCase()}]`;
        }
        return pattern;
    }

    function replacer(match, $1, $2, $3) {
        let strReplacer = '';
        for(let i = 0; i<$2.length; i++){
            strReplacer += modifyChar($2[i]);
        }
        // console.log($3)
        // console.log(str)
        return $1 + strReplacer + $3;

        function modifyChar(ch) {
            switch (ch){
                case '!' : return '1';
                case '%' : return '2';
                case '#' : return '3';
                case '$' : return '4';
                default : return ch.toLowerCase();
            }
        }
    }
}
// solver([
//     'specialKey',
//     'In this text the specialKey HELLOWORLD! is correct, but',
//     'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
//     'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
// ])
solver([
    'hiddenTrap',
    'Now the ultimate hiddenTrap HIDDENTR just some text',
    'who said the message couldn\'t be contained in the key',
    'or it could be this HIDDENTRAP, HIDDENTRAP HIDDENTRA',
    'some more tests this one is wrong (HIDDENTRAP HIDDENTRA)',
    'now with some spaces HIDDENTRAP         HIDDENTRA  HIDDENTRAP  HIDDENTR',
    'hiddenTrap HiddenTRA, hiddenTrap HIDDENTRA',
])