function findDistance(arr) {
    let obj1 = {
        'coordinateX' : arr[0],
        'coordinateY' : arr[1],
        'coordinateZ' : arr[2]
    };
    let obj2 = {
        'coordinateX' : arr[3],
        'coordinateY' : arr[4],
        'coordinateZ' : arr[5]
    };

    let distX = obj1.coordinateX - obj2.coordinateX;
    let distY = obj1.coordinateY - obj2.coordinateY;
    let distZ = obj1.coordinateZ - obj2.coordinateZ;

    let distance = Math.sqrt(distX**2 + distY**2 + distZ**2)

    return distance;
}

console.log(findDistance([1, 1, 0, 5, 4, 0]));
console.log(findDistance([3.5, 0, 1, 0, 2, -1]));