let currentPage = 1;
let audio;

function showNextPage() {
    const current = document.getElementById(`page${currentPage}`);
    const next = document.getElementById(`page${currentPage + 1}`);

    if (next) {
        current.classList.remove('active');
        next.classList.add('active');
        currentPage++;

        if (currentPage === 4) {
            startCelebration();
        }
    }
}

function startCelebration() {
    const countdown = document.getElementById('countdown');
    let count = 3;

    // Countdown
    const countdownInterval = setInterval(() => {
        countdown.textContent = `Surprise in... ${count}`;
        count--;
        if (count < 0) {
            clearInterval(countdownInterval);
            countdown.style.display = 'none';

            // Trigger fireworks and confetti
            generateFireworks();
            generateConfetti();
        }
    }, 1000);
}

function generateFireworks() {
    const container = document.getElementById('fireworkContainer');
    container.innerHTML = ""; // Clear old fireworks
    for (let i = 0; i < 10; i++) {
        const firecracker = document.createElement('div');
        firecracker.classList.add('firecracker');
        firecracker.style.left = `${Math.random() * 100}%`;
        firecracker.style.top = `${Math.random() * 100}%`;
        container.appendChild(firecracker);

        setTimeout(() => firecracker.remove(), 2000);
    }
}

function generateConfetti() {
    const container = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(confettiPiece);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const playMusicButton = document.getElementById('playMusic');
    audio = new Audio('snehasong.mp3');
    audio.loop = true;

    playMusicButton.addEventListener('click', () => {
        audio.play().catch(err => console.error(err));
    });

    // Dynamically generate 10 balloons
    const balloonContainer = document.getElementById('balloons');
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloonContainer.appendChild(balloon);
    }

    setTimeout(showNextPage, 5000);
    setTimeout(showNextPage, 8000);
    setTimeout(showNextPage, 10000);
});
