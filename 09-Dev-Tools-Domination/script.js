const misa = 0;

const selectP = document.querySelector('p[data-click]');
console.log(selectP);

selectP.addEventListener('click', function() {
    selectP.style.color = '#f934';
    selectP.style.fontSize = '50px';    
});

console.log('hello');

console.log('hello', 'background:red');

console.error('Nope');

console.info('rene');

console.assert(1 === 2, 'not the right place' );

//console.clear(); it would clear 

//it will give you all the date form the element
console.dir(selectP)

console.count('Wes');
console.count('Wes');

// will tell you how long it's taking

console.time('fetching data');
fetch('https://api.github.com/users/mcarreno-11')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
 });