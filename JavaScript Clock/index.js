setInterval(() => {
    const hourHand = document.querySelector('[data-hour-hand]');
    const minuteHand = document.querySelector('[data-minute-hand]');
    const secondHand = document.querySelector('[data-second-hand]');


   const currentDate = new Date();
   const secondsRatio = currentDate.getSeconds() / 60;
   const minutesRatio = ( secondsRatio + currentDate.getMinutes()) / 60;
   const hoursRation = (minutesRatio + currentDate.getHours()) / 12;

  function setRotation(element, rotationRation){
    element.style.setProperty('--rotation', + rotationRation * 360)
  }
  setRotation(secondHand, secondsRatio);
  setRotation(hourHand, hoursRation)
  setRotation(minuteHand, minutesRatio)

}, 500);