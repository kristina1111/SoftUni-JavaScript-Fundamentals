function solver(arr) {
    let date = new Date(Date.UTC(arr[2], arr[1]-1, arr[0]));
    date.setDate(0);
    return date.getDate();
}
 solver([17, 3, 2002]);