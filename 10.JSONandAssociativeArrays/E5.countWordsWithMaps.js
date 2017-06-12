function solver(input) {
    const regex = /[\w]+/mg;
    let mapp = new Map();
    input.forEach(function (e) {
        let matches = e.toLowerCase().match(regex) || [];
        matches.forEach(function (m) {
            if (mapp.get(m) != undefined) {
                mapp.set(m, mapp.get(m) + 1)
            } else {
                mapp.set(m, 1);
            }
        });
    });

    mapp = new Map(
        Array
            .from(mapp)
            .sort()
            );
    function logMapElements(value, key, map) {
        console.log(`'${key}' -> ${value} times`);
    }

    mapp.forEach(logMapElements);
}

console.log(solver(['The man was walking the dog down the road when it suddenly started barking against the other dog. Surprised he pulled him away from it.']));
