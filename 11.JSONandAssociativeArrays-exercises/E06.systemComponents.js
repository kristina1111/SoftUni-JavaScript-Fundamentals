function solver(arr) {
    let register = [];
    arr.forEach(function (e) {
        e = e.split(' | ').filter(function (e) {
            return e !== '';
        });
        if (!register.hasOwnProperty(e[0])) {
            register[e[0]] = [];
        }
        if(!register[e[0]].hasOwnProperty(e[1])){
            register[e[0]][e[1]] = [];
        }
        register[e[0]][e[1]].push({
            systemName: e[0],
            componentName: e[1],
            subcomponent: e[2]
        })
    });
    console.log(register);
    console.log();

    let sortedRegister = sortObjectsByTwoCriteria(register);

    logSortedRegister(sortedRegister);
    function logSortedRegister(array) {
        array.forEach(function (e) {
            console.log(e[0][0].systemName);
            e.forEach(function (inE) {
                console.log(`|||${inE[0].componentName}`);
                inE.forEach(function (inEin) {
                    console.log(`||||||${inEin.subcomponent}`)
                })
            })
        })
    }

    function sortObjectsByTwoCriteria(array) {
        //make the assoc array sortable numeric array
        let sortableArray = [];
        for(let obj in array){
            let innerArr = array[obj];
            sortableArray.push([]);
            for(let inObj in innerArr){
                // console.log(innerArr[inObj]);
                sortableArray[sortableArray.length-1].push(innerArr[inObj]);
            }
        }
        //sort the array
        sortableArray.sort(function (a, b) {
            // console.log(a[0][0]);
            if(a.length - b.length == 0){
                return a[0][0].systemName.localeCompare(b[0][0].systemName)
            }
            return b.length - a.length
        });
        //sort the inner arrays as wanted by task
        for(let i = 0; i<sortableArray.length; i++){
            sortableArray[i].sort(function (a, b) {
                return b.length - a.length;
            })
        }

        return sortableArray;
    }
}
solver([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Lambda | CoreC | C5',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);


// not my solution !!!
function systemComponents(input) {
    let systems = new Map();

    for(let line of input) {
        let tokens = line.split(/\s*\|\s*/);
        let system = tokens[0];
        let component = tokens[1];
        let subcomponent = tokens[2];

        if(! systems.get(system)){
            systems.set(system, new Map());
        }
        if(! systems.get(system).get(component)){
            systems.get(system).set(component, [])
        }
        systems.get(system).get(component).push(subcomponent);
    }

    let systemsSorted = Array.from(systems.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of systemsSorted) {
        console.log(system);
        let componentsSorted = Array.from(systems.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            systems.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(systems.get(s1).size != systems.get(s2).size) {
            return systems.get(s2).size - systems.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return systems.get(system).get(c2).length - systems.get(system).get(c1).length;
    }
}