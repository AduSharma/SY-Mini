let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

 const userP = document.querySelector("#user_score");
 const compP = document.querySelector("#comp_score");
const genCompchoice = () => {
    const options = ["rock" , "paper" , "scissors"]
    const ran_index =  Math.floor(Math.random()*3);
    return options[ran_index];
};

const drawGame = () => {
    console.log("Game was Draw. ")
    msg.innerText = "Game was Draw. ";
     msg.style.backgroundColor = "#7F7CAF";
};


const showWinner = (userWin, user_choice , comp_choice) => {
    if(userWin){
        console.log("You Win 👏");
        userScore++;
        userP.innerText = userScore;
        msg.innerText = `You Win 👏 Your ${user_choice} beats Computer's ${comp_choice}` ; 
        msg.style.backgroundColor = "green";
    } else{
        console.log("Computer Wins 😎 ");
        compScore++;
        compP.innerText = compScore;
        msg.innerText = `Computer Wins 😎 Computer's ${comp_choice} beats  Your ${user_choice}`  ;
         msg.style.backgroundColor = "red";
    }
};
const decider = (user_choice) => {
    console.log("User's Choice =  ", user_choice);
    const comp_choice = genCompchoice();
    console.log("Computer's Choice =  ", comp_choice);


    if (user_choice === comp_choice) {
        drawGame();
    } else{
        let userWin = true;
        if(user_choice === "rock") {
            userWin = comp_choice === "scissors" ? true : false ;
        } else if (user_choice === "scissors") {
            userWin = comp_choice === "paper" ? true : false;
        } else {
            userWin = comp_choice === "rock" ? true : false;
        } showWinner(userWin , user_choice, comp_choice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const user_choice = choice.getAttribute("id");
        console.log("choice was selected", user_choice );
        decider(user_choice);
    });
});


