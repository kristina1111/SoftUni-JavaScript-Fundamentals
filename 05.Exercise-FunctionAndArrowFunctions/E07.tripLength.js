function solver(arr) {



    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x1-x2)**2 + (y1-y2));
    }

    let arrLocations = [];
    for(let i = 1, k = 1; i<arr.length; i+=2, k++){
        arrLocations.push(
            {
                'order' : k,
                'coordinates' : {
                    'x' : arr[i-1],
                    'y' : arr[i]
                },
                'passed' : false
            }
        )
    }


    console.log(arrLocations);
}

solver([-1, -2, 3.5, 0, 0, 2]);