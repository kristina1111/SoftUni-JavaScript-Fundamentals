function solver(arr) {
    if(arr[arr.length-1] == ''){
        arr.pop();
    }

    let courseAveragePoints = {
        name : arr.pop().trim(),
        allPoints : [],
        getAveragePoints : function (pointsArr) {
            return pointsArr.reduce((acc, curr) => acc+curr)/pointsArr.length
        }
    };
    for(let i = 0; i<arr.length; i++){
        let tokens = arr[i].split(' ').filter((e) => e!== '');
        let coursePoints = calculateCoursePoints(Number(tokens[2]), Number(tokens[3]));
        if(courseAveragePoints.name == tokens[1]){
            courseAveragePoints.allPoints.push(Number(tokens[2]));
        }
        let output = "";
        if(Number(tokens[2])<100){
            output += tokens[0] + ' failed at "' + tokens[1] + '"';
            console.log(output);
        }else{
            let examGrade = calculateGrade(coursePoints);
            output += tokens[0]
                + ': Exam - "'
                + tokens[1]
                + '"; Points - '
                + roundNumber(coursePoints, 2)
                + '; Grade - '
                + examGrade.toFixed(2);
            console.log(output);
        }
    }

    console.log(`"${courseAveragePoints.name}" average points -> ${roundNumber(courseAveragePoints.getAveragePoints(courseAveragePoints.allPoints),2)}`);
    
    function calculateCoursePoints(examPoints, bonusPoints) {
        return examPoints*0.2 + bonusPoints;
    }
    function calculateGrade(coursePoints) {
        return Math.min(((coursePoints/80)*4) + 2, 6);
    }

    function roundNumber(number, roundTo) {
        let factor = Math.pow(10, roundTo); // we initialize new number 10 with as much zeros as the precision
        // it will be used to take so much digits (after the point) from the number that we want to round, as we want to round to
        // e.g. if we want to round to 3 digits after the floating point, we first will multiply the number to 1000
        // then we will round the number (thus we will clear the digits after the point)
        number = Math.round(number*factor);
        // then we will divide by 1000 so that we will move back the point where it was at the beginning
        number /= factor;

        return number;
    }
}
// solver([ 'Pesho C#-Advanced 100 3',
//     'Gosho Java-Basics 157 3',
//     'Tosho HTML&CSS 317 12',
//     'Minka C#-Advanced 57 15',
//     'Stanka C#-Advanced 157 15',
//     'Kircho C#-Advanced 300 0',
//     'Niki C#-Advanced 400 10',
//     'C#-Advanced',
//     '' ]);

solver([
    'Student1 C#-Advanced 100 3',
    'Student2 C#-Advanced 157 3',
    'Student3 C#-Advanced 317 12',
    'Student4 C#-Advanced 57 15',
    'Student5 C#-Advanced 157 15',
    'Student6 C#-Advanced 333 7',
    'Student7 C#-Advanced 222 6',
    'Student8 C#-Advanced 111 15',
    'Student9 C#-Advanced 99 1',
    'Student10 C#-Advanced 0 0',
    'Student11 C#-Advanced 236 0',
    'Student12 C#-Advanced 150 0',
    'Student13 C#-Advanced 77 1',
    'Student14 C#-Advanced 390 12',
    'Student15 C#-Advanced 100 10',
    'C#-Advanced',
])