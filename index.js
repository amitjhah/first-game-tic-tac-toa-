let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true;//player0, playerX

const resetbtn = () => {
    turn0 = true;
    enblebtn();
    msgContainer.classList.add("hide");
}

const winpattern =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
   
});

const disabledbtn = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enblebtn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const ShowWinner = (Winner) =>{
msg.innerText = `player${Winner} win`;
msgContainer.classList.remove("hide");
}

 function checkWinner(){
    for( let pattern of winpattern){
       let pat1val = boxes[pattern[0]].innerText;
         let pat2val =  boxes[pattern[1]].innerText;
          let pat3val =  boxes[pattern[2]].innerText;
            if(pat1val !="" && pat2val != "" && pat3val != ""){
                if(pat1val === pat2val && pat2val === pat3val){
                    console.log("WINNER", pat1val);
                     ShowWinner(pat1val);
                     disabledbtn();
                }
            }
        
    }
 }

 reset.addEventListener("click", resetbtn);