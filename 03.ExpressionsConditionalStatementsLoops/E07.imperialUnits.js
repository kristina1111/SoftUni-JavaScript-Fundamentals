function inchToFeet(inches){
    let feet = Math.floor(inches/12);
    inches = inches%12;
    return `${feet}'-${inches}"`
}

console.log(inchToFeet(55));