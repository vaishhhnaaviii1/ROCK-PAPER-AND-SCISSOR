let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock","paper","scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => {
  msg.innerText= "Game was Draw. Play again";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice, compchoice ) => {
  if(userWin) {
    userScore++;
    userscorepara.innerText = userScore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
      compScore++;
      compscorepara.innerText = compScore;
      msg.innerText = `You Lose! ${userchoice} beats Your ${compchoice}`;
      msg.style.backgroundColor = "red";
  }
}

const playGame = (userchoice) => {
  console.log("user choice=", userchoice);
  const compchoice = gencompchoice();
  console.log("comp choice=", compchoice);

  if (userchoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userchoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if(userchoice === "paper") {
       userWin = compchoice === "scissors" ? false : true;
    } else {
       userWin = compchoice === "rock" ? false : true ;
    }
    showWinner( userWin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () =>{
    const userchoice=choice.getAttribute("id");
    console.log("choice was clicked", userchoice);
    playGame(userchoice);
  })
})