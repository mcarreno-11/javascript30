const m = 0;

const pressedKey = [];
const secretCode = 'nothis'

window.addEventListener('keyup', e => {
    console.log(e.key);
    pressedKey.push(e.key);
    pressedKey.splice(-secretCode.length - 1, pressedKey.length - secretCode.length);

    console.log(pressedKey);
    if(pressedKey.join('').includes(secretCode)) {
        console.log('Batman');
    }     

});
