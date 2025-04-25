let game_seq=[];
let user_seq=[];
btn_clrs=["pink","blue","red","purple"];
let started=false;
let level=0;
let highScore=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;//by this the game starts only once
        levelUp();
    }
})
 
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
 
function userFlash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash")
        },250);
   
}

function levelUp(){
    user_seq=[];
    level++; 
    h2.innerText=`Level ${level}`;
     
    //random box choose
    let randomidx=Math.floor(Math.random()*3);
    let randomClr=btn_clrs[randomidx];
    let randombtn=document .querySelector(`.${randomClr}`)
    game_seq.push(randomClr);
    console.log(game_seq);
    // console.log(randomidx);
    // console.log(randombtn);
    // console.log(randomClr)
    gameFlash(randombtn)
}

function checkAns(idx){
    // console.log("curr level",level)
    

    if(user_seq[idx]==game_seq[idx]){
        if(user_seq.length==game_seq.length){
           setTimeout(levelUp,1000);
        }
        console.log("Same Value");
    }
    else{
        
        h2.innerHTML=`Game Over!Your Score was <b>${level}</b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor="pink";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";l
        },250)
        reset(); 


} 
}


function btnPress(){
    let btn=this;//all btn used in differrnt funtions are diffferent
    userFlash(btn);
    // console.log(this)
    userClr=btn.getAttribute("id");
    user_seq.push(userClr)

    checkAns(user_seq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

// function reset(){
//     started=false;
//     game_seq=[];
//     user_seq=[];
//     level=0;
// }
function reset() {
    if (level - 1 > highScore) {
      highScore = level - 1;
    }
   
    level = 0;
    gamePattern = [];
    started = false;
    h2.innerText = "Game Over, Press Any Key to Restart (Highest Score: " + highScore + ")";
    updateHighScoreDisplay();
  }
 function highestScore(){
    if (level > highScore) {
        highScore = level;
        updateHighScoreDisplay(); // this updates the visible scor

 }
 }