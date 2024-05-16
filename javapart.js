
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  document.getElementById('startTimer').disabled = true;
  document.getElementById('stopTimer').disabled = false;
  document.getElementById('resetTimer').disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById('startTimer').disabled = false;
  document.getElementById('stopTimer').disabled = true;
  document.getElementById('resetTimer').disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('timer').textContent = '00:00:00';
  document.getElementById('startTimer').disabled = false;
  document.getElementById('stopTimer').disabled = true;
  document.getElementById('resetTimer').disabled = true;
}

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

  // Send the variable values to the second page
  const secondPageIframe = document.querySelector('iframe');
  if (secondPageIframe && secondPageIframe.contentWindow) {
    secondPageIframe.contentWindow.postMessage({ hours, minutes, seconds }, '*');
  }
}

window.onload = startTimer;
