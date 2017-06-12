// Judge - 100/100
function solver(arr) {
    let cut = {
        name: 'Cut',
        function: (chunk) => chunk / 4
    };
    let lap = {
        name: 'Lap',
        function: (chunk) => chunk * 0.8
    };
    let grind = {
        name: 'Grind',
        function: (chunk) => chunk - 20
    };
    let etch = {
        name: 'Etch',
        function: (chunk) => chunk - 2
    };
    let xRay = {
        name: 'X-ray',
        function: (chunk) => chunk + 1
    };
    let transport = {
        name: 'Transporting and washing',
        function: (chunk) => Math.floor(chunk)
    };
    let arrDecreasingOperations = [
        cut,
        lap,
        grind,
        etch
    ];
    let sample = arr.shift();

    arr.forEach(function (chunk) {
        let preCrystal = chunk;
        console.log(`Processing chunk ${chunk} microns`);
        let priorityOperation = {
            operation: arr[0],
            count: Number.MAX_SAFE_INTEGER,
            qtRemoved: 0
        };
        let currentOperation = {};
        while (true) {
            if(preCrystal == sample || Math.floor(preCrystal) == sample - 1){
                if(Math.floor(preCrystal) == sample - 1){
                    preCrystal = xRay.function(preCrystal);
                    console.log(`${xRay.name} x1`);
                }
                break;
            }


            arrDecreasingOperations.forEach(function (operation) {

                currentOperation.operation = operation;
                currentOperation.count = 0;
                let workingCrystal = preCrystal;
                while (operation.function(workingCrystal) >= sample-1) {
                    currentOperation.count += 1;
                    workingCrystal = operation.function(workingCrystal);
                    currentOperation.qtRemoved = preCrystal - workingCrystal;
                }

                if (priorityOperation.count > currentOperation.count && priorityOperation.qtRemoved < currentOperation.qtRemoved) {
                    priorityOperation.count = currentOperation.count;
                    priorityOperation.qtRemoved = currentOperation.qtRemoved;
                    priorityOperation.operation = currentOperation.operation;
                    preCrystal = workingCrystal;
                }
                currentOperation.qtRemoved = 0;
            });

            console.log(`${priorityOperation.operation.name} x${priorityOperation.count}`);
            preCrystal = transport.function(preCrystal);
            console.log(transport.name);

            priorityOperation.count = Number.MAX_SAFE_INTEGER;;
            priorityOperation.qtRemoved = 0;

        }

        console.log(`Finished crystal ${preCrystal} microns`);

    });
}

// solver([1375, 50000]);
// solver([1000, 4000, 8100]);
solver([100, 99]);



// radioCrystals below - Not my solution - Judge 100/100

function radioCrystals(arr) {
    let cut = {
        name: 'Cut',
        func: (chunk) => chunk / 4
    };
    let lap = {
        name: 'Lap',
        func: (chunk) => chunk * 0.8
    };
    let grind = {
        name: 'Grind',
        func: (chunk) => chunk - 20
    };
    let etch = {
        name: 'Etch',
        func: (chunk) => chunk - 2
    };
    let xRay = {
        name: 'X-ray',
        func: (chunk) => chunk + 1
    };
    let transport = {
        name: 'Transporting and washing',
        func: (chunk) => Math.floor(chunk)
    };
    let operations = [cut, lap, grind, etch];

    function processCrystal(chunk, targetThickness) {
        output = `Processing chunk ${chunk} microns\n`;
        let opIndex = 0;
        let opCount = 0;

        while (true) {
            if (chunk == targetThickness || Math.floor(chunk) == targetThickness - 1) {
                if (opCount > 0) {
                    output += `${operations[opIndex].name} x${opCount}\n`;
                    output += `${transport.name}\n`;
                }
                if (Math.floor(chunk) == targetThickness - 1) {
                    output += `${xRay.name} x1\n`;
                    chunk++;
                }
                break;
            }

            let operationProduct = operations[opIndex].func(chunk);

            if (Math.floor(operationProduct) < targetThickness - 1) {
                if (opCount > 0) {
                    output += `${operations[opIndex].name} x${opCount}\n`;
                    output += `${transport.name}\n`;
                }
                chunk = transport.func(chunk);
                opCount = 0;
                opIndex++;
                continue;
            }

            opCount++;
            chunk = operationProduct;
        }

        output += `Finished crystal ${chunk} microns\n`;
        return output;
    }

    let targetThickness = arr[0];
    let output = '';
    for (var i = 1; i < arr.length; i++) {
        output += processCrystal(arr[i], targetThickness);
    }

    return output;
}