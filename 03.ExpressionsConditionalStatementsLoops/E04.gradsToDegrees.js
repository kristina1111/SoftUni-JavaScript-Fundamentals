function gradToDegrees(grad) {
    const divisorGradToDegrees = 1.11111111111;
    grad = grad%400;
    if(grad<0){
        grad += 400;
    }
    return grad/divisorGradToDegrees;
}

console.log(gradToDegrees(850));
console.log(gradToDegrees(-450));