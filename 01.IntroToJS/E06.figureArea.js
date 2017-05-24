function solver(width1, height1, width2, height2) {
    let innerFigArea = (width2 - width1 >= 0 ? width1 : width2) * (height2 - height1 >= 0 ? height1 : height2);
    let area = height2*width2 + height1*width1 - innerFigArea;
    console.log(area);
}

solver(13, 2, 5, 8);
solver(2, 4, 5, 3)
solver(1, 1, 2, 2)