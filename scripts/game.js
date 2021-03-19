let logos = ["bootstrap", "css", "electron", "firebase", "html", "javascript", "jquery", "mongo", "node", "react", "bootstrap", "css", "electron", "firebase", "html", "javascript", "jquery", "mongo", "node", "react"];
let positions = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
// let logos = ["bootstrap", "bootstrap", "node", "node"];
// let positions = [false, false, false, false]
const SIZE = 20;

let play = 1;
let flipping = 0;

function flipCard() {
    let pos = Number(this.id)

    if ((flipping < 2) && !positions[pos]) {
        flipping++;
        this.classList.add("flip")
        positions[pos] = true
        if (play == 1) 
            firstCard = pos;  
        else {
            secondCard = pos;
            if (!compareCards(firstCard, secondCard)) {
                unFlipCards(firstCard, secondCard);
                positions[firstCard] = false;
                positions[secondCard] = false;
            } else {
                flipping = 0;
                updatePositions(firstCard, secondCard)
                endGame();
            }
        } 
        play = play == 1 ? 2 : 1;          
    } 

}

function compareCards(fc, sc) {
    return logos[fc] == logos[sc] 
}

function unFlipCards(fc, sc) {
    cards = document.querySelectorAll(".card")
    setTimeout(() => {
        cards[fc].classList.remove("flip");
        cards[sc].classList.remove("flip");
        flipping = 0;
    }, 1200);
}

function updatePositions(fc, sc) {
    positions[fc] = true;
    positions[sc] = true;
}

function endGame() {
    let checkEnd = positions.filter(pos => !pos)
    if (checkEnd.length == 0) 
        setTimeout(() => {
            document.getElementById("end-game").style.display = "flex";
        }, 200);
}

function restartGame() {
    for (let i = 0; i < SIZE; i++) {
        positions[i] = false;
    }
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.parentNode.removeChild(card);
    })
    play = 1;
    document.getElementById("end-game").style.display = "none";
    startGame();
}