const moves=document.querySelectorAll(".move");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
const newGame = document.getElementById("new-btn");
let userScore=0;
let compScore=0;

let gameDraw=()=>{
msg.innerText="Game Was Draw, Play Again";
msg.style.backgroundColor="hsl(212, 71.90%, 11.20%)"

};
let showWinner=(userWin,userChoice,compChoice)=>{
if (userWin) {
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    userScorePara.innerText=userScore;


} else {
    msg.innerText=`You Lose, ${compChoice} beats your  ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    compScorePara.innerText=compScore;
}
};


let genrateComputerChoice=()=>{
    const choices=["Rock","Paper","Scissor"]
    const randomInt = Math.floor(Math.random() * 3);
    const computerChoice=choices[randomInt];
    return computerChoice;
};

let playGame =(userChoice)=>{
let compChoice=genrateComputerChoice();
if (userChoice===compChoice) {
 gameDraw();
}else {
    let userWin = true;
    if (userChoice === "Rock") {
      //scissors, paper
      if(compChoice === "Paper"){
        userWin=false;
      }
      
    } else if (userChoice === "Paper") {
      //rock, scissors
      if(compChoice === "Scissor"){
        userWin=false;
      }
    } else {
      //rock, paper
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};


moves.forEach((choice) => {
   
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
 });

newGame.addEventListener("click" ,()=>{
   userScore=0;
   compScore=0;
   userScorePara.innerText = userScore;
   compScorePara.innerText = compScore;
   msg.innerHTML="Play Your Move";
   msg.style.backgroundColor="hsl(212, 71.90%, 11.20%)"
}
);