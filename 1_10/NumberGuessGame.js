function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    let massage = document.createElement("p");
    let input = document.createElement("input");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.placeholder = "好きな数字を入力してください (1~100)"
    let button = document.createElement("button");
    button.textContent = "予想"
    button.addEventListener("click",function(){
        const userGuess = parseInt(input.value);
        if(userGuess === randomNumber){
            massage.textContent = "正解！"
        }else if(userGuess > randomNumber){
            massage.textContent = "値が高いよ！"
        }else{
            massage.textContent = "値が小さいよ！"
        }
    })
    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(massage);
}
