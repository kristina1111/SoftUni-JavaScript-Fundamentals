function solver(arr) {
    let usernames = [];
    arr.forEach(function (e) {
        usernames.push(getUsernameFromEmail(e));
    });

    return usernames.join(', ');

    function getUsernameFromEmail(input) {
        let indexChar = input.indexOf('@', 0);
        let username = "";
        username += input.substr(0, indexChar) + ".";

        while (indexChar !== -1 ){
            username += input.substr(indexChar+1, 1);
            indexChar = input.indexOf('.', indexChar + 1);
        }

        return username;
    }
}
console.log(solver([
    'peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'
]
));