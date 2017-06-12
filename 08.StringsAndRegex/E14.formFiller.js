function solver(name, email, phone, arr) {
    const regexName = /<![a-zA-Z]+!>/gm;
    const regexEmail = /<@[a-zA-Z]+@>/gm;
    const regexPhone = /<\+[a-zA-Z]+\+>/gm;
    arr.forEach(function (e) {
        e = e.replace(regexName, name);
        e = e.replace(regexEmail, email);
        e = e.replace(regexPhone, phone);
        console.log(e);
    })
}
solver('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'])