function solver(arr) {
    let obj1 = {
        'speed' : arr[0],
        'distancePassed' : 0
    };
    let obj2 = {
        'speed' : arr[1],
        'distancePassed' : 0
    };
    let timeInHours = arr[2]/60/60;

    obj1.distancePassed = obj1.speed*timeInHours;
    obj2.distancePassed = obj2.speed*timeInHours;

    let distance = Math.abs(obj1.distancePassed - obj2.distancePassed)*1000;

    console.log(distance);
}

solver([0, 60, 3600]);
solver([11, 10, 120]);
solver([5, -5, 40]);
