// Set the countdown time in seconds
let countdownTime = 10; // 10 seconds

// Update the timer display and countdown
const timerDisplay = document.getElementById('timer');
const countdownInterval = setInterval(() => {
    countdownTime -= 1;
    timerDisplay.textContent = countdownTime;

    // Check if countdown has reached zero
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        window.location.href = 'login.html'; // Redirect to login page
    }
}, 1000);
