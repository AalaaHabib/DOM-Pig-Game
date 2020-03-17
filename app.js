//
var score_0 = document.getElementById('score-0');
var score_1 = document.getElementById('score-1');
var current_0 = document.getElementById('current-0');
var current_1 = document.getElementById('current-1');
var image = document.getElementById('image');
var btn1=document.getElementById('btn-1')
var btn2=document.getElementById('btn-2')
//start
function start(){
    score_0.innerText=0;
    score_1.innerText=0;
    current_0.innerText=0;
    current_1.innerText=0;
    image.classList.add('hidden');
    btn1.addEventListener('click',RollDice);
}
start();
var x;
var player1=document.getElementById('one');
var player2=document.getElementById('two');
// Roll Dice
btn1.addEventListener('click',RollDice)
function RollDice(){
    x=  Math.round( Math.random()*5) +1;
    image.classList.remove('hidden');
    image.src="dice-"+x+".png";
    if(player1.classList.contains('active')){
        if(x !=1){
            current_0.innerText =parseInt(current_0.innerText) +x;
        }
        else{
            current_0.innerText=0;
            image.classList.add('hidden');
            player1.classList.remove('active');
            player2.classList.add('active');
        }
    }
    else{
        if(x !=1){
            current_1.innerText =parseInt(current_1.innerText) +x;
        }
        else{
            current_1.innerText=0;
            image.classList.add('hidden');
            player2.classList.remove('active');
            player1.classList.add('active');
        }
    }
}
//hold
 function hold(){
     if(player1.classList.contains('active')){
        score_0.innerText = parseInt(score_0.innerText) +parseInt(current_0.innerText);
        current_0.innerText=0;
        if (score_0.innerText>=100){
            player1.classList.remove('active');
            player1.classList.add('winner');
            document.getElementById('name-0').innerText="winner!";
            btn1.removeEventListener('click',RollDice)
         }else{
            player1.classList.remove('active');
            player2.classList.add('active');
         }
     }
     else{
        score_1.innerText = parseInt(score_1.innerText) +parseInt(current_1.innerText);
        current_1.innerText=0;
        if (score_1.innerText>=100){
            player2.classList.remove('active');
            player2.classList.add('winner');
            document.getElementById('name-1').innerText="winner!";
            btn1.removeEventListener('click',RollDice)
         }
        else{
            player2.classList.remove('active');
            player1.classList.add('active');
        }
     }
 }




 