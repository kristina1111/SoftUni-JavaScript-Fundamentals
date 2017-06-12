function solver(number) {
    let pattern = 'ATCGTTAGGG';
    let cntStars = 2;
    let cntDashes = 0;
    let isStarsPlus = false;
    for (let row = 0, letter = 1; row < number; row++, letter += 2) {
        console.log('*'.repeat(cntStars)
            + pattern[letter % pattern.length - 1]
            + '-'.repeat(cntDashes)
            + '-'.repeat(cntDashes)
            + pattern[letter % pattern.length]
            + '*'.repeat(cntStars));

        if (isStarsPlus) {
            cntStars++;
            cntDashes--;
            if (cntDashes == 0) {
                isStarsPlus = false;
            }
        } else {
            cntStars--;
            cntDashes++;
            if (cntStars == 0) {
                isStarsPlus = true;
            }
        }
    }
}

solver(10);