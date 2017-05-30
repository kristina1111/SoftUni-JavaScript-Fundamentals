function solver(arr) {
    let point = {
        'x' : arr[0],
        'y' : arr[1]
    };
    let rectangle = {
        'xLeft' : arr[2],
        'xRight' : arr[3],
        'yUp' : arr[4],
        'yDown' : arr[5]
    };
    let isInside = point.x>=rectangle.xLeft &&
            point.x<=rectangle.xRight &&
            point.y>=rectangle.yUp &&
            point.y <=rectangle.yDown;
    return isInside ? 'inside' : 'outside';
}

console.log(solver([8, -1, 2, 12, -3, 3]));