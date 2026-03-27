// AI Pattern: Rock, Rock, Paper, Scissors
const pattern = ['rock', 'rock', 'paper', 'scissors'];
let patternIndex = 0;

function startGame(playerChoice) {
    const countdownDisplay = document.getElementById('countdown-text');
    let count = 3;
    
    // Disable buttons
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(btn => btn.disabled = true);

    countdownDisplay.innerText = count;

    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownDisplay.innerText = count;
        } else {
            clearInterval(interval);
            countdownDisplay.innerText = "";
            buttons.forEach(btn => btn.disabled = false); 
            processResult(playerChoice);
        }
    }, 800);
}

function processResult(playerChoice) {
    const aiChoice = pattern[patternIndex];
    patternIndex = (patternIndex + 1) % pattern.length;

    const popup = document.getElementById('popup');
    const msg = document.getElementById('result-msg');
    const media = document.getElementById('media-content');

    let outcome = "";

    if (playerChoice === aiChoice) {
        outcome = "DRAW";
    } else if (
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'paper' && aiChoice === 'rock') ||
        (playerChoice === 'scissors' && aiChoice === 'paper')
    ) {
        outcome = "WIN";
    } else {
        outcome = "LOSE";
    }

    popup.style.display = 'flex';
    msg.innerText = outcome;

    // Logic for Big Images
    if (outcome === "LOSE") {
        media.innerHTML = `<img src="lose.png" class="result-image" alt="You Lose!">`;
    } else if (outcome === "WIN") {
        media.innerHTML = `<img src="win.png" class="result-image" alt="You Win!">`;
    } else {
        media.innerHTML = ""; // No image for a draw
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
