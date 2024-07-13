let randomNumber;
let attempts;

function initGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById('result-message').innerText = '';
}

function submitGuess() {
    const guess = parseInt(document.getElementById('guess-input').value);
    attempts++;

    if (guess === randomNumber) {
        alert(`¡Correcto! Lo lograste en ${attempts} intentos.`);
    } else if (guess > randomNumber) {
        document.getElementById('result-message').innerText = 'El número es menor.';
    } else {
        document.getElementById('result-message').innerText = 'El número es mayor.';
    }
}

function playAgain() {
    initGame();
    document.getElementById('guess-input').value = '';
}

window.onload = initGame;
