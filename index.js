const options=["box1","box2","box3","box4","box5","box6","box7","box8","box9"];
let playerSelectionArray=[];
let computerSelectionArray=[];
const possibility1=["box1","box2","box3"];
const possibility2=["box1","box4","box7"];
const possibility3=["box1","box5","box9"];
const possibility4=["box2","box5","box8"];
const possibility5=["box3","box6","box9"];
const possibility6=["box3","box5","box7"];
const possibility7=["box4","box5","box6"];
const possibility8=["box7","box8","box9"];
function getComputerChoice(){
    const computerChoice=options[Math.floor(Math.random()*options.length)];
    computerSelectionArray.push(`${computerChoice}`);
 const selectedDiv=document.querySelector(`#${computerChoice}>div`);
 for(let i=0;i<options.length;i++)
 {
     if(options[i]===`${computerChoice}`)
     {
         options.splice(i,1);
     }
 }
  selectedDiv.innerHTML="O";
}
function checkWinner(){
    if(computerSelectionArray.length > 2 ||playerSelectionArray.length > 2){
        if(computerSelectionArray.length >2 ){
if(possibility1.every(v =>computerSelectionArray.includes(v))||
possibility2.every(v =>computerSelectionArray.includes(v))||
possibility3.every(v =>computerSelectionArray.includes(v))||
possibility4.every(v =>computerSelectionArray.includes(v))||
possibility5.every(v =>computerSelectionArray.includes(v))||
possibility6.every(v =>computerSelectionArray.includes(v))||
possibility7.every(v =>computerSelectionArray.includes(v))||
possibility8.every(v =>computerSelectionArray.includes(v)))
{
    return "computer";
}}
 else if(playerSelectionArray.length > 2){
if(possibility1.every(v =>playerSelectionArray.includes(v))||
 possibility2.every(v =>playerSelectionArray.includes(v))||
 possibility3.every(v =>playerSelectionArray.includes(v))||
 possibility4.every(v =>playerSelectionArray.includes(v))||
 possibility5.every(v =>playerSelectionArray.includes(v))||
 possibility6.every(v =>playerSelectionArray.includes(v))||
 possibility7.every(v =>playerSelectionArray.includes(v))||
 possibility8.every(v =>playerSelectionArray.includes(v)))
{
    return "player";
}}}
if(options.length===0)
{
    return "tie";
}
}
function declareWinner()
{
    const resultDiv=document.querySelector(".main>.result");
    const win=checkWinner();
    if(win==="computer")
    {
        resultDiv.innerHTML="OOPS! YOU LOSE 😔";
    }
    else if(win==='player')
    {
        resultDiv.innerHTML="OOHO! YOU WIN🚩";
    }
    else if(win==='tie'){
        resultDiv.innerHTML="Game Tie!Play Again 🔄";
    }
}
const buttons=document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        if(options.length!=0){
        playerSelectionArray.push(`${button.id}`);
        console.log(playerSelectionArray);
        for(let i=0;i<options.length;i++)
        {
            if(options[i]===`${button.id}`)
            {
                options.splice(i,1);
            }
        }
      const selectedDiv=document.querySelector(`#${button.id}>div`);
      selectedDiv.innerHTML="X";
      setTimeout(getComputerChoice,250);}
      declareWinner();
      
    })
});
