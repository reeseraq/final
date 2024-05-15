let hours, minutes, seconds;

function startTimer() {
  const timerInterval = setInterval(updateTimer, 200);

  function updateTimer() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    let formattedHours = String(hours).padStart(2, '0');
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}

window.addEventListener('message', function (event) {
  if (event.data && typeof event.data === 'object') {
    hours = event.data.hours;
    minutes = event.data.minutes;
    seconds = event.data.seconds;
    startTimer();
  }
});
