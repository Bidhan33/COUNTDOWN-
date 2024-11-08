// Variable to hold the countdown interval
let countdownInterval;

function startCountdown() {
    // Clear any existing countdown
    clearInterval(countdownInterval);

    // Get the target date and time from the user input
    const userDate = document.getElementById("countdown-date").value;
    const endDate = new Date(userDate);

    // Check if the input is a valid date
    if (isNaN(endDate)) {
        alert("Please enter a valid date and time.");
        return;
    }

    // Function to update the countdown display
    function updateCountdown() {
        const now = new Date();
        const timeRemaining = endDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("countdown-display").textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Stop countdown when time is up
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown-display").textContent = "Time's up!";
        }
    }

    // Start the countdown interval to update every second
    countdownInterval = setInterval(updateCountdown, 1000);
}
