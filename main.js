let homeScoreEl = document.getElementById("score-home-el")
let guestScoreEl = document.getElementById("score-guest-el")
let homeScore = 0;
let guestScore = 0;

const startingSeconds = 15;
let time = startingSeconds * 1;


const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    let seconds = time % 60;
    if (time < 0)
    return 
    countdownEl.innerHTML = `00:${seconds}`;
    
    time--;

}




function onePointHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}
function twoPointHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}
function threePointHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function onePointGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}
function twoPointGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}
function threePointGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}