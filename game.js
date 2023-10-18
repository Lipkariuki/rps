//players
const player1Text = document.querySelector("#player1Text");
const player2Text = document.querySelector("#player2Text");
const outcomeText = document.querySelector("#outcomeText");


//buttons
const selectBtns = document.querySelectorAll(".selectBtn")
let player1
let player2
let outcome

selectBtns.forEach(button =>button.addEventListener("click",()=>{

    player1 = button.textContent
    player2();
    player1Text.textContent = `player1:$(player1)`;
    player2Text.textContent = `player2:$(player2)`;
    outcomeText.textContent =  checkWinner()
}))
function player2(){
    const randNum = Math.floor(Math.random() * 3) +1;

    switch(randNum){
        case 1:
            player2 = "Rock";
            break;
        case 2:
            player2 = "Paper";
            break;
        case 3:
            player2 = "Scissors";
            break;  
    }
}

function checkWinner(){
    if(player1 == computer){
        return "Draw";
    }
    else if (player2 == "Rock"){
        return (player1 == "Paper") ? "You Win" : "Lost"
    }
    else if (player2 == "Paper"){
        return (player1 == "Scissors") ? "You Win" : "Lost"
}
else if (player2 == "Scissors"){
    return (player1 == "Rock") ? "You Win" : "Lost"
}
}


