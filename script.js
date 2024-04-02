document.getElementById('start-timer').addEventListener('click', function() {
    const timeFrame = parseInt(document.getElementById('time-frame').value);
    if (isNaN(timeFrame) || timeFrame <= 0) {
        alert("Please enter a valid time in minutes.");
        return;
    }

    const endTime = Date.now() + timeFrame * 60000; // Convert minutes to milliseconds
    const endSound = document.getElementById('end-sound');

    const timer = setInterval(function() {
        const remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(timer);
            endSound.play();
            alert("Time's up!");
        }
    }, 1000);
});
