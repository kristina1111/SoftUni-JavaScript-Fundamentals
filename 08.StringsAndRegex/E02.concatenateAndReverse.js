function solver(arr) {
    let output = "";
    for(let i = arr.length-1; i>=0; i--){
        output += reverseString(arr[i]);
    }

    return output;

    function reverseString(str) {
        if(str === ""){
            return "";
        }
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
console.log(solver(['I', 'am', 'student']));