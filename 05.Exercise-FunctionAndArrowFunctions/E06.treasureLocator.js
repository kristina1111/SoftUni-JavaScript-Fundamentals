function solver(arr) {
    let islandTuvalu = {
        'name' : 'Tuvalu',
        'coordinates' : {
            'xMin' : 1,
            'xMax' : 3,
            'yMin' : 1,
            'yMax' : 3
        }
    };
    let islandTonga = {
        'name' : 'Tonga',
        'coordinates' : {
            'xMin' : 0,
            'xMax' : 2,
            'yMin' : 6,
            'yMax' : 8
        }
    };
    let islandSamoa = {
        'name' : 'Samoa',
        'coordinates' : {
            'xMin' : 5,
            'xMax' : 7,
            'yMin' : 3,
            'yMax' : 6
        }
    };
    let islandCook = {
        'name' : 'Cook',
        'coordinates' : {
            'xMin' : 4,
            'xMax' : 9,
            'yMin' : 7,
            'yMax' : 8
        }
    };
    let islandTokelau = {
        'name' : 'Tokelau',
        'coordinates' : {
            'xMin' : 8,
            'xMax' : 9,
            'yMin' : 0,
            'yMax' : 1
        }
    };
    let arrIslands = [
        islandTuvalu,
        islandCook,
        islandSamoa,
        islandTonga,
        islandTokelau
    ];
    for(let i = 1; i<arr.length; i+=2){
        if(isOnIsland(arr[i-1], arr[i])){
            console.log('On the bottom of the ocean');
        }
    }

    function isOnIsland(x, y) {
        for(let island in arrIslands){
            if(arrIslands[island].coordinates.xMin<=x && arrIslands[island].coordinates.xMax>=x){
                if(arrIslands[island].coordinates.yMin<=y && arrIslands[island].coordinates.yMax>=y){
                    console.log(arrIslands[island].name);
                    return false;
                }
            }
        }
        return true;
    }
}

solver([6, 4]);