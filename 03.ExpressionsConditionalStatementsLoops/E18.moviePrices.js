function getTicketPrice(arr) {
    let movie = arr[0].toLowerCase();
    let day = arr[1].toLowerCase();
    let dataMatrix= [];
    dataMatrix['the godfather'] = [];
    dataMatrix['the godfather']['monday'] = 12;
    dataMatrix['the godfather']['tuesday'] = 10;
    dataMatrix['the godfather']['wednesday'] = 15;
    dataMatrix['the godfather']['thursday'] = 12.50;
    dataMatrix['the godfather']['friday'] = 15;
    dataMatrix['the godfather']['saturday'] = 25;
    dataMatrix['the godfather']['sunday'] = 30;

    dataMatrix["schindler's list"] = [];
    dataMatrix["schindler's list"]['monday'] = 8.50;
    dataMatrix["schindler's list"]['tuesday'] = 8.50;
    dataMatrix["schindler's list"]['wednesday'] = 8.50;
    dataMatrix["schindler's list"]['thursday'] = 8.50;
    dataMatrix["schindler's list"]['friday'] = 8.50;
    dataMatrix["schindler's list"]['saturday'] = 15;
    dataMatrix["schindler's list"]['sunday'] = 15;

    dataMatrix['casablanca'] = [];
    dataMatrix['casablanca']['monday'] = 8;
    dataMatrix['casablanca']['tuesday'] = 8;
    dataMatrix['casablanca']['wednesday'] = 8;
    dataMatrix['casablanca']['thursday'] = 8;
    dataMatrix['casablanca']['friday'] = 8;
    dataMatrix['casablanca']['saturday'] = 10;
    dataMatrix['casablanca']['sunday'] = 10;

    dataMatrix['the wizard of oz'] = [];
    dataMatrix['the wizard of oz']['monday'] = 10;
    dataMatrix['the wizard of oz']['tuesday'] = 10;
    dataMatrix['the wizard of oz']['wednesday'] = 10;
    dataMatrix['the wizard of oz']['thursday'] = 10;
    dataMatrix['the wizard of oz']['friday'] = 10;
    dataMatrix['the wizard of oz']['saturday'] = 15;
    dataMatrix['the wizard of oz']['sunday'] = 15;

    if(dataMatrix.hasOwnProperty(movie)){
        if(dataMatrix[movie].hasOwnProperty(day)){
            return dataMatrix[movie][day];
        }
    }
    return 'error';
}

console.log(getTicketPrice(['The Godfather', 'Friday']));
