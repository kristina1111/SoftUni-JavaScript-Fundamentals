function solver(arr){
    let inputNumber = arr.shift();


    for (let i = 0; i<arr.length; i++){
        inputNumber = factory(inputNumber, arr[i])
        console.log(inputNumber);
    }

    function factory(number, operation){
        switch (operation){
            case 'chop':
                return chop(number);
            case 'dice':
                return dice(number);
            case 'spice':
                return spice(number);
            case 'bake':
               return bake(number);
            case 'fillet':
                return fillet(number);
            default:
                return 'no operation';
        }

        function chop(number) {
            return number/2;
        }
        function dice(number) {
            return Math.sqrt(number);
        }
        function spice(number) {
            return number+1;
        }
        function bake(number) {
            return number*3;
        }
        function fillet(number) {
            return number - number*0.2;
        }
    }
}
solver([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);