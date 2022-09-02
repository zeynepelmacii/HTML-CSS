const exams = '14 Nov 2022';
const daysIndex = document.getElementById('days');
const hoursIndex = document.getElementById('hours');
const minutesIndex = document.getElementById('minutes');
const secondsIndex = document.getElementById('seconds');

function countdown() {
  const examDate = new Date(exams);
  const currentDate = new Date();

  const totalSeconds = (examDate-currentDate)/1000;
  const days = Math.floor(totalSeconds/3600/24);
  const hours = Math.floor(totalSeconds/3600)%24;
  const minutes = Math.floor(totalSeconds/60)%60;
  const seconds = Math.floor(totalSeconds)%60;

  daysIndex.innerHTML = days;
  hoursIndex.innerHTML = hours;
  minutesIndex.innerHTML = minutes;
  secondsIndex.innerHTML = seconds;
  
}

countdown();
setInterval(countdown, 1000);
