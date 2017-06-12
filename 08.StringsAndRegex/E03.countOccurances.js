// if there are overlapping of words the regex
// matches only the first occurrence
function solver(pattern, string) {
    const regex = new RegExp(pattern, 'g');
    return (string.match(regex) || []).length;
}
console.log(solver('mama', 'Marine mamamal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));

function countStringInText(str, text) {
    let count = 0;
    let index = text.indexOf(str);
    while (index > -1) {
        count++;
        index = text.indexOf(str, index + 1);
    }
    return count;
}
console.log(countStringInText('mama', 'Marine mamamal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));