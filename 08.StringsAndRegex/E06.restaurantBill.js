function solver(arr) {
    let products = [];
    let totalSum = 0;
    for(let i = 1; i<arr.length; i+=2){
        products.push(arr[i-1]);
        totalSum += Number(arr[i]);
    }
    return `You purchased ${products.join(', ')} for a total sum of ${totalSum}`;
}
console.log(solver(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));