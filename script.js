function processResult(playerChoice) {
    const aiChoice = pattern[patternIndex];
    patternIndex = (patternIndex + 1) % pattern.length;

    const popup = document.getElementById('popup');
    const msg = document.getElementById('result-msg');
    const media = document.getElementById('media-content');

    let outcome = "";
    if (playerChoice === aiChoice) { outcome = "DRAW"; }
    else if (
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'paper' && aiChoice === 'rock') ||
        (playerChoice === 'scissors' && aiChoice === 'paper')
    ) { outcome = "WIN"; }
    else { outcome = "LOSE"; }

    popup.style.display = 'flex';
    
    if (outcome === "WIN") {
        msg.innerText = ""; // Hide the default 'WIN' text to use custom title
        media.innerHTML = `
            <div class="win-title">CHAMPION TIME!</div>
            <img src="win.png" class="result-image">
            <img src="celebrate.png" class="moving-image">
        `;
    } else if (outcome === "LOSE") {
        msg.innerText = "LOSE";
        media.innerHTML = `<img src="lose.png" class="result-image">`;
    } else {
        msg.innerText = "DRAW";
        media.innerHTML = ""; 
    }
}
