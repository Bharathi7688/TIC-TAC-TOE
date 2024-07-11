let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#eset-btn");
let msgContainer=document.querySelector(".msg-con")
let turnO=true;
let count=0;

const winPatten = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

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
        checkWinner();
    });
});

const ShowWinner=(winner)=>{
    msg.innerText='Congratulation, Winner is'+ winner;
    msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
    for (let pattern  of winPatten){
       let pos1 = boxes[pattern[0]].innerHTML;
       let pos2 = boxes[pattern[1]].innerHTML;
       let pos3 = boxes[pattern[2]].innerHTML;

       if (pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos1 && pos2 ===pos3){
           ShowWinner(pos1);
           return true;

        }
       }
    }
}