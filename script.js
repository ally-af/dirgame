let targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const messageElement = document.getElementById("message");
const attemptsElement = document.getElementById("attempts");
const resetButton = document.getElementById("reset");

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

function checkGuess() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = "Please enter a valid number between 1 and 100!";
        messageElement.style.color = "red";
        return;
    }

    attempts++;
    attemptsElement.textContent = `Attempts: ${attempts}`;

    if (guess < targetNumber) {
        messageElement.textContent = "Too low! Try again.";
        messageElement.style.color = "orange";
    } else if (guess > targetNumber) {
        messageElement.textContent = "Too high! Try again.";
        messageElement.style.color = "orange";
    } else {
        messageElement.textContent = `Congratulations! You've guessed the number in ${attempts} attempts.`;
        messageElement.style.color = "green";
        submitButton.disabled = true;
        resetButton.style.display = "block";
    }

    guessInput.value = "";
    guessInput.focus();
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsElement.textContent = `Attempts: ${attempts}`;
    messageElement.textContent = "";
    submitButton.disabled = false;
    resetButton.style.display = "none";
    guessInput.value = "";
    guessInput.focus();
}
