let boxBtn=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn = document.querySelector("#newBtn");
let msgSection = document.querySelector(".msg-section");
let msg = document.querySelector("#msg");

let turnX= true;

let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const Draw = () => {
        msg.innerText = `Game was a Draw.`;
        msgContainer.classList.remove("hide");
        disableBox();
      };

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBox();   
    count = 0;
    msgSection.classList.add("hide");
}
boxBtn.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnX) { // or if(turnX === true)
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
         Draw();    
        }

        
    });
});

const disableBox = () => {
    for(let box of boxBtn){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxBtn){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinnner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgSection.classList.remove("hide"); 
    disableBox();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxBtn[pattern[0]].innerText;
        let pos2Val = boxBtn[pattern[1]].innerText;
        let pos3Val = boxBtn[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""  )
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinnner(pos1Val);
            }
        }
    }
}


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);