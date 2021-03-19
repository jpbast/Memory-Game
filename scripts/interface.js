startGame();

function startGame() {
    for (let i = 0; i < SIZE; i++) {
        createCards(i);
    }
    let cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        card.addEventListener("click", flipCard)
    })
     
    shuffleCards(cards);
}

function createCards(indice) {
    let tabuleiro = document.getElementById("tab");
    let div = document.createElement("div");
    let front = document.createElement("div");
    let back = document.createElement("div");
    div.classList.add("card");
    front.classList.add("frontcard");
    back.classList.add("backcard");
    div.id = indice.toString();
    div.appendChild(front);
    div.appendChild(back);
    tabuleiro.appendChild(div);
    front.innerHTML = "<img src='./assets/question_mark.png' alt='question mark' width=40px;>"
}

function unFlip(card) {
    card.classList.remove("flip");
}

function shuffleCards(cards) {
    logos.sort(() => 0.5 - Math.random()); 
    let backcard = document.querySelectorAll(".backcard")
    for (let i = 0; i < SIZE; i++) {
        backcard[i].innerHTML = `<img src='./assets/${logos[i]}.png' alt=${logos[i]}>`
    }
}