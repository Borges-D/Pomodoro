let countdown;
let timeInSeconds = 1500; // 25 minutes

function startTimer(type) {
    let time;
    switch (type) {
        case 'work':
            time = 1500; // 25 minutes
            break;
        case 'shortBreak':
            time = 300; // 5 minutes
            break;
        case 'longBreak':
            time = 900; // 15 minutes
            break;
        default:
            time = 1500; // 25 minutes
            break;
    }
    timeInSeconds = time;
    countdown = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    timeInSeconds = 1500;
    updateTimer();
}

function updateTimer() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    document.getElementById('minutes').textContent = padTime(minutes);
    document.getElementById('seconds').textContent = padTime(seconds);

    if (timeInSeconds > 0) {
        timeInSeconds--;
    } else {
        clearInterval(countdown);
        playAlarm(50); // Reproduz o som do alarme
        alert('Pomodoro Timer completed!');
    }
}

function padTime(time) {
    return time < 10 ? '0' + time : time;
}

function playAlarm() {
    const audio = document.getElementById('alarm');
    audio.play();
}