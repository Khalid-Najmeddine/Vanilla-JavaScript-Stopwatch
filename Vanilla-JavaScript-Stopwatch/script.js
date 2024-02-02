window.onload = function() {
  let hours = 00;
  let minutes = 00;
  let seconds = 00;
  let milliseconds = 00;
  let appendHours = document.querySelector("#hours");
  let appendMinutes = document.querySelector("#minutes");
  let appendSeconds = document.querySelector("#seconds");
  let appendMilliseconds = document.querySelector("#milliseconds");
  let startButton = document.querySelector("#start");
  let stopButton = document.querySelector("#stop");
  let resetButton = document.querySelector("#reset");
  let interval;

  function startTimer() {
    milliseconds++;

    if (milliseconds <= 9) {
      appendMilliseconds.innerHTML = "0" + milliseconds;
    }
    if (milliseconds > 9) {
      appendMilliseconds.innerHTML = milliseconds;
    }
    if (milliseconds > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliseconds = 0;
      appendMilliseconds.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
    if (minutes > 59) {
      hours++;
      appendHours.innerHTML = "0" + hours;
      minutes = 0;
      appendMinutes.innerHTML = "0" + 0;
    }
  }

  startButton.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  stopButton.onclick = function() {
    clearInterval(interval);
  };

  resetButton.onclick = function() {
    clearInterval(interval);
    hours = "00";
    minutes = "00";
    seconds = "00";
    milliseconds = "00";
    appendHours.innerHTML = hours;
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendMilliseconds.innerHTML = milliseconds;
  }
}