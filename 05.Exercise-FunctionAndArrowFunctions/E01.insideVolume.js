function solver(arr) {

    for (let i = 2; i < arr.length; i += 3) {
        let x = arr[i - 2];
        let y = arr[i - 1];
        let z = arr[i];

        insideVolume(x, y, z) ? console.log('inside') : console.log('outside');
    }

    function insideVolume(x, y, z) {
        let box = {
            'xMin': 10,
            'xMax': 50,
            'yMin': 20,
            'yMax': 80,
            'zMin': 15,
            'zMax': 50
        };

        if (box.xMin <= x && box.xMax >= x) {
            if(box.yMin<=y && box.yMax>=y){
                if(box.zMin<=z && box.zMax>=z){
                    return true;
                }
            }
        }
        return false;
    }
}

solver([50, 80, 50]);