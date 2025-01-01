const letters = ["p","r","i","s","m"];
const firstBox = document.getElementById("firstBox");
const secondBox = document.getElementById("secondBox");
const thirdBox = document.getElementById("thirdBox");
const fourthBox = document.getElementById("fourthBox");
const fifthBox = document.getElementById("fifthBox");
const submitBtn = document.getElementById("submitBtn");
const userInput = document.getElementById("user-input");
const resetBtn = document.getElementById("resetBtn");
const firstImg =document.getElementById("firstImg");
const secondImg = document.getElementById("secondImg");
const thirdImg = document.getElementById("thirdImg");
const fourthImg = document.getElementById("fourthImg");
const fifthImg = document.getElementById("fifthImg");
const drawings = [firstImg,secondImg,thirdImg,fourthImg,fifthImg];
const boxes = [firstBox,secondBox,thirdBox,fourthBox,fifthBox];
foundLetters = [];
const firstLife = document.getElementById("firstHealth");
const secondLife = document.getElementById("secondHealth");
const thirdLife = document.getElementById("thirdHealth");
const hearts = [firstLife,secondLife,thirdLife];
let lives = 3;
let score = 0;
hearthIndex = 0;
function checkPrediction(event){
    
    event.preventDefault();
    for(i=0;i<5;i++){
        if ((letters[i] == userInput.value || letters[i].toUpperCase()) && !foundLetters.includes(letters[i]) ){

            boxes[i].style.visibility = "hidden";
            drawings[i].style.visibility = "visible";
            foundLetters.push(letters[i])
           score +=20;
          
           document.getElementById("score").innerText = score;
         
           break; 
        }
       else if(i==4){
        lives--;
        hearts[hearthIndex].style.visibility = "hidden";
        hearthIndex++;

       }

    }
    if(lives===0){
        alert("Oyunu kaybettin")
    }
    else if(score ===100){
        alert("Oyunu kazandiniz!");
        restartGame();
    }
}

function restartGame(event){
    for(i=0;i<5;i++){
        boxes[i].style.visibility = "visible";
        drawings[i].style.visibility="hidden";
       
    }
    for(k=0;k<3;k++){
        hearts[k].style.visibility = "visible";
    }
    hearthIndex = 0;
    if(event){
    event.preventDefault();
    }
    lives = 3;
    document.getElementById("score").innerText = 0;
    foundLetters = [];
    score = 0;

}






submitBtn.addEventListener("click",checkPrediction);

resetBtn.addEventListener("click",restartGame);
