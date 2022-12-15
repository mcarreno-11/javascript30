const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    //this is a consturcutre 
    const now = new Date();

    //this gets us the seconds 
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) +90;
    secondHand.style.tranform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    //this gets us the minutes 
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.tranform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.tranform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);