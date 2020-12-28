function* createIdGenerator() {
    for (let i = 1; i < Infinity; i++) {
        yield i;
    }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
const textUp = document.querySelector('.keyUp');
const textDown = document.querySelector('.keyDown');
const textToFormat = document.querySelector('p');
const currentFont = parseInt(getComputedStyle(textToFormat).fontSize);

function* newFontGenerator(textSize) {
    let size = textSize;
    while (true) {
        const char = yield size;
        if (char === 'up') {
            size++;
        } else if (char === 'down') {
            size--;
        }
    }
}
const fontGenerator = newFontGenerator(currentFont);
textUp.addEventListener('click', function () {
    textToFormat.style.fontSize = `${fontGenerator.next('up').value}px`;
});
textDown.addEventListener('click', function () {
    textToFormat.style.fontSize = `${fontGenerator.next('down').value}px`;
});