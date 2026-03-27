const pattern = ['rock', 'rock', 'paper', 'scissors'];
let patternIndex = 0;

function startGame(playerChoice) {
    const countdownDisplay = document.getElementById('countdown-text');
    let count = 3;
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

    popup.style.display = 'flex';

    if (playerChoice === aiChoice) {
        msg.innerText = "DRAW";
        media.innerHTML = "";
    } 
    else if (
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'paper' && aiChoice === 'rock') ||
        (playerChoice === 'scissors' && aiChoice === 'paper')
    ) {
        // WINNING SCREEN
        msg.innerText = ""; 
        media.innerHTML = `
            <div class="win-title">CHAMPION TIME!</div>
            <div class="image-row">
                <img src="win.png" class="result-image">
                <img src="win-side.jpg" class="result-image-side">
            </div>
            <img src="celebrate.png" class="moving-image">
        `;
    } 
    else {
        // LOSING SCREEN
        msg.innerText = "LOSE";
        media.innerHTML = `<img src="lose.png" class="result-image">`;
    }

    // --- AUTO RETURN TO HOME AFTER 5 SECONDS ---
    setTimeout(() => {
        closePopup();
    }, 5000);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
