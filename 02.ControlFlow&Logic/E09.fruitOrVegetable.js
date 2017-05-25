function fruitOrVegetable(input) {
    switch (input.toLowerCase()){
        case 'banana':
        case 'apple':
        case 'cherry':
        case 'kiwi':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
    }
}

fruitOrVegetable('banana');
fruitOrVegetable('garlic');
fruitOrVegetable('chocolate');