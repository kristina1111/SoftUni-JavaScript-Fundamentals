function solver(input) {
    const regexForSpecialChars = /(%20|\+)/g;
    input.forEach(function (e) {
        let keyValuePairsRegister = {};
        let index = e.indexOf('?') == -1 ? 0 : e.indexOf('?') + 1;
        let keyValuePair = e.slice(index).split('&').map(function (e) {
            return e.replace(regexForSpecialChars, replaceWithSpace).replace(/ +/g, replaceWithSpace);
        });

        keyValuePair.forEach(function (keyValue) {
            keyValue = keyValue.split('=').map(e => e.trim());

            if(!keyValuePairsRegister.hasOwnProperty(keyValue[0])){
                keyValuePairsRegister[keyValue[0]] = [];
            }
            keyValuePairsRegister[keyValue[0]].push(keyValue[1]);
        });
        let output = "";
        for(let key in keyValuePairsRegister){
            output += key + '=[' + keyValuePairsRegister[key].join(', ') + ']';
        }
        console.log(output);
    });

    function replaceWithSpace(match, group1) {
        return ' ';
    }
}
solver([
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
    ]);