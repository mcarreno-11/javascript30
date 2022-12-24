//create a function that when the key it makes a sound 
//window will lisent over all in the page 

function playSound(evt) {
    //evt is the event that happens when you key down 
   console.log(evt);
   // your selectin an audio and getting his data-key
   // the [] is a get attribute 
   // you get null if it does not match the data-key 
   const audioPlay = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
   // select the divs in the html and display the play class 
   const keySelector = this.document.querySelector(`.key[data-key="${evt.keyCode}"]`);
   console.log(keySelector);
  
   if(!audioPlay) return; //stops the function from all together 
   audioPlay.currentTime = 0; // rewind to the start
   audioPlay.play();
   // add the css class to the keySelector
   keySelector.classList.add('playing');
};


// you cannot lisent to all the array you have to lisent one by one 
function removeTransiton(evt){
    if(evt.propertyName !== 'transform') return; // skip if it's not a transform 
    this.classList.remove('playing');
};

// select all the id class key 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransiton));

window.addEventListener('keydown', playSound); 

