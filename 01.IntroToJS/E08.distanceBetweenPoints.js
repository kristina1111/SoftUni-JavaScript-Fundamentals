function solver(x1, y1, x2, y2) {
    let obj1 = {
        'coordinateX' : x1,
        'coordinateY' : y1
    };
    let obj2 = {
        'coordinateX' : x2,
        'coordinateY' : y2
    };

    let distance = Math.sqrt((obj1.coordinateX - obj2.coordinateX)**2 + (obj1.coordinateY - obj2.coordinateY)**2);
    console.log(distance);
    // console.log((obj2.coordinateY - obj2.coordinateY)**2);
}

solver(2, 4, 5, 0);
solver(2.34, 15.66, -13.55, -2.9985);