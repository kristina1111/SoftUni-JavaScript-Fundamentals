function solver(coneRadius, coneHeight) {
    let volume = Math.PI*coneRadius*coneRadius*coneHeight/3;
    console.log(`volume = ${volume.toFixed(4)}`);

    let area = Math.PI*coneRadius*Math.sqrt((coneRadius*coneRadius + coneHeight*coneHeight)) + Math.PI*coneRadius*coneRadius;
    console.log(`area = ${area.toFixed(4)}`);
}

solver(3, 5)