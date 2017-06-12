function solver(arr) {
    const limits = {
        'motorway' : 130,
        'interstate' : 90,
        'city' : 50,
        'residential' : 20
    };

    const speeding = {
        'overLimit': 20,
        'message' : 'speeding'
    };
    const excessive = {
        'overLimit' : 40,
        'message' : 'excessive speeding'
    };

    let speed = arr[0];
    let area = arr[1];
    if(limits.hasOwnProperty(area)) {
        if(limits[area] <speed){
            return severity(speed - limits[area]);
        }else{
            return "";
        }
    }

    function severity(speedOverLimit) {
        if(speedOverLimit>0 && speedOverLimit<=speeding.overLimit){
            return speeding.message;
        }else if (speedOverLimit>speeding.overLimit && speedOverLimit <=excessive.overLimit){
            return excessive.message;
        }else{
            return 'reckless driving';
        }
    }
}

console.log(solver([40, 'city']));