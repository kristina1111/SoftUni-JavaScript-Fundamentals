function solver(arr) {
    let juices = [];
    let position = 1; // need it for ordering the objects in the array by the moment bottles are first created
    arr.forEach(function (e) {
        e = e.split(' => ').filter(function (el) {
            return el !== '';
        });
        juices = makeObject(juices, e, position);
    });

    juices = juices.sort(function (a, b) {
        return a.order - b.order
    });
    juices = sortAssociativeArray(juices);

    function sortAssociativeArray(array) {
        let sortableArr = [];
        for (let el in array) {
            sortableArr.push(array[el]);
        }
        sortableArr.sort(function (a, b) {
            return a.order - b.order;
        });
        let returnAssocArray = [];
        sortableArr.forEach(function (e) {
            returnAssocArray[e.name] = e;
        });
        return returnAssocArray;
    }

    for (let el in juices) {
        if(juices[el].bottles>0){
            console.log(`${el} => ${juices[el].bottles}`);
        }
    }
    // console.log(juices);

    function makeObject(arrayObjects, arrayObjectInfo) {
        if (arrayObjects.hasOwnProperty(arrayObjectInfo[0])) {
            arrayObjects[arrayObjectInfo[0]].quantity += Number(arrayObjectInfo[1]);
            arrayObjects[arrayObjectInfo[0]].bottles = Math.floor(arrayObjects[arrayObjectInfo[0]].quantity / 1000);
            if (arrayObjects[arrayObjectInfo[0]].order == 0) {
                if (arrayObjects[arrayObjectInfo[0]].bottles > 0) {
                    arrayObjects[arrayObjectInfo[0]].order = position;
                    position++;
                }
            }
        } else {
            arrayObjects[arrayObjectInfo[0]] = {
                name: arrayObjectInfo[0],
                quantity: Number(arrayObjectInfo[1]),
                bottles: Math.floor(Number(arrayObjectInfo[1]) / 1000),
                order: 0
            };
            if (arrayObjects[arrayObjectInfo[0]].bottles > 0) {
                arrayObjects[arrayObjectInfo[0]].order = position;
                position++;
            }
        }
        return arrayObjects;
    }
}
// solver([
//     'Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789'
// ])
solver([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])