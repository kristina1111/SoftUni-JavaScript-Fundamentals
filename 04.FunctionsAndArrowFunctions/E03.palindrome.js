function isPalindrome(string) {
    for(let ch = 0; ch<Math.floor(string.length/2); ch++){
        if(string[ch] != string[string.length-1-ch]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('hagah'));