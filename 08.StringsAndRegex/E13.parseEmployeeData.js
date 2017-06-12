function solver(arr) {
    // const regex = /^([A-Z][a-z]+) - ([\d]+) - ([A-Za-z0-9-]+( [A-Za-z0-9-]+)*)(?=$)/gm;
    // const regex = /^([A-Z][a-zA-Z]*) - ([1-9][\d]*) - ([A-Za-z0-9-]+( [A-Za-z0-9-]+)*)$/gm;
    const regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/;
    arr.forEach(function (e) {
        let m = e.match(regex);
        if(m){
            console.log(`Name: ${m[1]}\nPosition: ${m[3]}\nSalary: ${m[2]}`);
        }

    })
}
// solver([
//     'Isacc - 1000 - CEO',
//     'Ivan - 500 - Employee',
//     'Peter - 500 - Employee'
// ]);
solver([
    'Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader '
]);