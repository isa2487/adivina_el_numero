function login() {
    const playerName = document.getElementById('player-name').value;
    if (playerName) {
        localStorage.setItem('playerName', playerName);
        window.location.href = 'gamepage.html';
    } else {
        alert('Por favor, ingresa tu nombre');
    }
}
