function solver(year, month, day) {
    let date = new Date(Date.UTC(year, month-1, day));
    date.setDate(date.getDate()+1);

    let stringDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    console.log(stringDate)
}

solver(2016, 9, 30)