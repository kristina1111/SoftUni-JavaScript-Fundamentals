function solver(inputString) {
    //   /^[a-z0-9]+@[a-z]{2,}[.][a-z]{2,}(?=$)/gm;   ---> for char to occur between 2 and infinite times
    const regex = /^[a-zA-Z0-9]+@[a-z]+([.][a-z]+)+(?=$)/gm;
    return (inputString.match(regex) || []).length > 0 ? 'Valid' : 'Invalid';
}
console.log(solver('valid@email.bg'));