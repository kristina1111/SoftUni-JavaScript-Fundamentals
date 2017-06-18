function solver(arr) {
    arr.pop();
    let register = new Map();
    arr.forEach(function (e) {
        e = e.split('&').filter((el) => el !== '');
        // console.log(e[0]);
        if (e.length == 2) {
            let appName = e[1].split('=')[1].slice(1).slice(0, -1);
            if (!register.has(appName)) {
                register.set(appName, {
                    name: appName,
                    controller: [],
                    model: [],
                    view: [],
                    created: false
                })
            }
            let elements = e[0].split('=');
            // console.log(elements[0].slice(1));
            register.get(appName)[elements[0].slice(1)].push(elements[1].slice(1).slice(0, -1));

        } else {
            let appName = e[0].split('=')[1].slice(1).slice(0, -1);
            if (!register.has(appName)) {
                register.set(appName, {
                    name: appName,
                    controller: [],
                    model: [],
                    view: [],
                    created: false
                })
            }
            register.get(appName).created = true;
        }
    });

    // leave only created modules
    register.forEach(function (value, key, map) {
        if (value.created == false) {
            register.delete(key);
        }
    });

    let sortedRegister = sortObjectsInMapByCriteria(register);
    // console.log(sortedRegister);
    console.log(logRegister(sortedRegister));

    function logRegister(register) {
        let output = '{';
        register.forEach(function (value, key, map) {
            output += '"' + key + '":';
            output += JSON.stringify(value);
            output += ',';
        });
        output = output.slice(0,-1);
        output += "}";
        return output;
    }

    function sortObjectsInMapByCriteria(map) {
        let sortableArr = [];
        map.forEach(function (value, key, map) {
            sortableArr.push(value);
        });

        // sort by controller property descending and by model property ascending
        sortableArr = sortableArr.sort(function (a, b) {
                if (a.controller.length - b.controller.length == 0) {
                    return a.model.length - b.model.length;
                }
                return b.controller.length - a.controller.length;
            }
        );

        let sortedMap = new Map();
        // sort controller, view and model properties alphabetically
        sortableArr.forEach(function (e) {
            e.controller = e.controller.sort(function (a, b) {
                return a.localeCompare(b);
            });
            e.model = e.model.sort(function (a, b) {
                return a.localeCompare(b);
            });
            e.view = e.view.sort(function (a, b) {
                return a.localeCompare(b);
            });

            // here I only make it proper for logging !!!
            let name = e.name;
            e.controllers = e.controller;
            delete e.controller;
            e.models = e.model;
            delete e.model;
            e.views = e.view;
            delete e.view;
            delete e.name;
            delete e.created;
            sortedMap.set(name, e);
        });

        return sortedMap
    }
}

solver(['$controller=\'PHPController\'&app=\'Language Parser\'',
    '$controller=\'JavaController\'&app=\'Language Parser\'',
    '$controller=\'C#Controller\'&app=\'Language Parser\'',
    '$controller=\'C++Controller\'&app=\'Language Parser\'',
    '$app=\'Garbage Collector\'',
    '$controller=\'GarbageController\'&app=\'Garbage Collector\'',
    '$controller=\'SpamController\'&app=\'Garbage Collector\'',
    '$app=\'Language Parser\'',
    ''])

// solver([
//     "$app='MyApp'",
//     "$controller='My Controller'&app=*MyApp*",
//     "$model='My Model'&app='MyApp'",
//     "$view='My View'&app='MyApp'",
//     ""
// ]);
// solver([
//     "$app='MyApp'",
//     "$controller='My Controller'&app=*MyApp*",
//     "$model='My Model'&app='MyApp'",
//     "$view='My View'&app='MyApp'",
//     '$controller=\'PHPController\'&app=\'Language Parser\'',
//     '$controller=\'JavaController\'&app=\'Language Parser\'',
//     '$controller=\'C#Controller\'&app=\'Language Parser\'',
//     '$controller=\'C++Controller\'&app=\'Language Parser\'',
//     '$app=\'Garbage Collector\'',
//     '$controller=\'GarbageController\'&app=\'Garbage Collector\'',
//     '$controller=\'SpamController\'&app=\'Garbage Collector\'',
//     '$app=\'Language Parser\'',
//     ''])

// solver([
//     "$app='MyApp'",
//     "$controller='My Controller'&app='MyApp'",
//     "$model='My Model'&app='MyApp'",
//     "$view='My View'&app='MyApp'",
//     '$controller=\'PHPController\'&app=\'Language Parser\'',
//     '$controller=\'JavaController\'&app=\'Language Parser\'',
//     '$app=\'Garbage Collector\'',
//     '$controller=\'GarbageController\'&app=\'Garbage Collector\'',
//     '$controller=\'SpamController\'&app=\'Garbage Collector\'',
//     "$model='My Model'&app='Garbage Collector'",
//     "$model='Ather Model'&app='Garbage Collector'",
//     '$app=\'Language Parser\'',
//     ''])