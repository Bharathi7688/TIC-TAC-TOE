let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#new-btn")
let turnO=true;
let count=0;

const winPatten = [ [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6] 
                ];

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBox();
    msgContainer.classList.add("hide")

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerHTML="O"
            console.log(box);
            turnO=false;
        }else{
            box.innerHTML="X"
            console.log(box);
            turnO=true;
        }
        box.disable=true;
        count++;
        let  isWinner=checkWinner();
        if (count===9 && ! isWinner)
            gameDraw();
    });
});

const gameDraw=()=>{
    msg.innerHTML='No Winner';
    msgContainer.classList.remove("hide");
    disable.box();
}

const ShowWinner=(winner)=>{
    msg.innerText='Winner is :'+ winner;
    msgContainer.classList.remove("hide");
    disable.box();
}

const disableBox=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const checkWinner=()=>{
    for (let pattern  of winPatten){
       let pos1 = boxes[pattern[0]].innerHTML;
       let pos2 = boxes[pattern[1]].innerHTML;
       let pos3 = boxes[pattern[2]].innerHTML;

       if (pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2 ===pos3){
           ShowWinner(pos1);
           return true;

        }
       }
    }
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);


