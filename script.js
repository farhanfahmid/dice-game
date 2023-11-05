
function roll_dice(){

    var rand_num1 = Math.random();
    var rand_num2 = Math.random();

    rand_num1 = rand_num1 * 6;
    rand_num2 = rand_num2 * 6;

    var dice_num1 = Math.floor(rand_num1)+1; 
    var dice_num2 = Math.floor(rand_num2)+1; 


    document.querySelector(".img1").setAttribute("src", "images/dice"+dice_num1+".png");

    document.querySelector(".img2").setAttribute("src", "images/dice"+dice_num2+".png");

    if(dice_num1>dice_num2){
        document.querySelector("h1").textContent="Player 1 Wins!"
    }

    else if(dice_num2>dice_num1){
        document.querySelector("h1").textContent="Player 2 Wins!"
    }
    else if(dice_num2==dice_num1){
        document.querySelector("h1").textContent="It's a Tie!"
    }
}

function reset(){
    location.reload();
}
    
document.querySelector("#roll-dice").addEventListener("click", roll_dice);
document.querySelector("#reset").addEventListener("click", reset);



