let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("Game was draw!");
    msg.innerText = "Game was draw . Play again.";
    msg.style.backgroundColor = "teal";
}

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your's ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const palyGame = (userChoice) => {

    const compChoice = genCompChoice();


    if (userChoice === compChoice) {
        drawGame();
    }

    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }

        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }


}
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        palyGame(userChoice);
    })
})