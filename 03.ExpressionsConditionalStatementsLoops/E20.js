function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH**2 + distY**2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

function solver(arr) {
    let pointA = {
        'x': arr[0],
        'y': arr[1]
    };
    let pointB = {
        'x': arr[2],
        'y': arr[3]
    };

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH**2 + distY**2);
    }

    function validityChecker() {
        if(Number.isInteger(distance(pointA.x, pointA.y, 0, 0))){
            console.log(`{${pointA.x}, ${pointA.y}} to {0, 0} is valid`)
        }else{
            console.log(`{${pointA.x}, ${pointA.y}} to {0, 0} is invalid`)
        }

        if(Number.isInteger(distance(pointB.x, pointB.y, 0, 0))){
            console.log(`{${pointB.x}, ${pointB.y}} to {0, 0} is valid`)
        }else{
            console.log(`{${pointB.x}, ${pointB.y}} to {0, 0} is invalid`)
        }

        if(Number.isInteger(distance(pointA.x, pointA.y, pointB.x, pointB.y))){
            console.log(`{${pointA.x}, ${pointA.y}} to {${pointB.x}, ${pointB.y}} is valid`)
        }else{
            console.log(`{${pointA.x}, ${pointA.y}} to {${pointB.x}, ${pointB.y}} is invalid`)
        }
    }

    validityChecker();
}

solve([3.3, 0, 0, 4]);
solver([3.3, 0, 0, 4]);
// solver([2, 1, 1, 1]);