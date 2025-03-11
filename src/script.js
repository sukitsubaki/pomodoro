let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;
let isWorkTime = true; // true: work, false: break
let interval;

const timerElement = document.getElementById('timer');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');
const statusElement = document.getElementById('status');

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerElement.textContent = formatTime(minutes, seconds);
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(interval);
    } else {
        interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    switchMode();
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }

            updateTimerDisplay();
        }, 1000);
    }

    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
}

function switchMode() {
    if (isWorkTime) {
        minutes = 5; // break time
    } else {
        minutes = 25; // work time
    }
    seconds = 0;
    isWorkTime = !isWorkTime;
    updateTimerDisplay();
}

startStopButton.addEventListener('click', startStopTimer);
resetButton.addEventListener('click', resetTimer);

updateTimerDisplay();
