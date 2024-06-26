function setDate(){

    let secondHand = document.querySelector(".second-hand");
    let minutesHand = document.querySelector(".min-hand");
    let hoursHand = document.querySelector(".hour-hand");

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/ 60) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) +90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

const hours = now.getHours() ;
const hoursDegrees = ((hours / 12) * 360) +90;
hoursHand.style.transform = `rotate(${hoursDegrees}deg)`


}

setInterval(setDate, 1000)