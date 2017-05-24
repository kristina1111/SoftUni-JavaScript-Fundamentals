function solver(minAge, person1Name, person1Age, person2Name, person2Age) {
    let infoArr = [
        {
            'name':person1Name,
            'age' : person1Age
        },
        {
            'name' : person2Name,
            'age' : person2Age
        }
    ];

    function filterByAge(obj) {
        if(obj.age >= minAge){
            return obj
        }
    }

    let filteredArr = infoArr
        .filter(filterByAge)
        .sort(function (a, b) {
        return a.age > b.age
    });
    let stringOutput = "";
    for(let i = 0; i<filteredArr.length; i++) {
        stringOutput += `{ name: '${filteredArr[i].name}', age: ${filteredArr[i].age} }`;
        if (i < filteredArr.length - 1) {
            stringOutput += ', ';
        }
    }
    console.log(stringOutput);
}

solver(12, 'Ivan', 119, 'Asen', 12)
