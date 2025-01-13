function getComputerChoice(){
    const choice=["Rock","Paper","scissors"];
    let n=Math.floor(Math.random()*choice.length);
    let choose=choice[n];
    console.log("computer Choice : " + choose)
    return choose;

}
function getHumanChoice(){
    let choice=prompt("What will you select");
    const choices=["rock","paper","scissors"];
    if(choices.includes(choice.toLowerCase()))
    {
        return choice;
    }
    else {
        console.log("Invalid Selection");
        return null;
    }
}
function playRound(humanChoice,computerChoice)
{
    let human=humanChoice.toLowerCase();
    let comp=computerChoice.toLowerCase();
    if (human === comp)
    {
        console.log("Its a tie")
    }
    else if(human=="rock")
    {
        if(comp=="paper")
        {
            computerScore+=1;
            console.log("You Lose");
        }
            
        else if(comp=="scissors")
        {
            humanScore+=1;
            console.log("Yaay! You Win");
        }
            
    }
    if(human=="paper")
        {
            if(comp=="rock")
            {
                humanScore+=1;
                console.log("Yaay! You Win");
            }
            else if(comp=="scissors")
            {
                computerScore+=1;
                console.log("You Lose");
            }
        }
    if(human=="scissors")
    {
        if(comp=="rock")
        {
            computerScore+=1;
            console.log("You Lose");
        }
        else if(comp=="paper")
        {
            humanScore+=1;
            console.log("Yaay! You Win");
        }
    }
}
let humanScore=0;
let computerScore=0; 
for(let i=0;i<5;i++)
{
    let humanSelection=getHumanChoice();  
    let computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
}
if(humanScore>computerScore)
    console.log("Winner");
else if(humanScore===computerScore)
    console.log("Tie");
else console.log("Loser");

