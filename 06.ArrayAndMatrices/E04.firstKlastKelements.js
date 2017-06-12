function solver(arr) {
    let k = arr.shift();
    k = k>arr.length ? arr.length : k;
    let firstK = [];
    let lastK = [];
    for(let i = 0; i<k; i++){
        firstK.push(arr[i]);
        lastK.unshift(arr[arr.length-1-i]);
    }
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
// solver([2, 7, 8, 9]);
solver([3, 6, 7, 8, 9]);