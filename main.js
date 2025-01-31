const gameSelector = document.getElementById("game-select");
const gameContainer = document.getElementById("game-container");
gameSelector = document.addEventListener("change",function(){
    gameContainer.innerHTML = '';
    switch (gameSelector.value) {
        case 'number-guess':
            startNumberGuessGame();
            break;
        case 'clicker':
            ClickCounterGame();
            break;
    }
})

function ClickCounterGame/*関数名*/(){
    let count = 0; //countという変数を用意して、0を代入する

    const gameContainer = document.getElementById("game-container");
    // const は定数 変更不可　htmlの特定のidのタグを探し、定数に代入する。

    let button1 = document.createElement("button");
    //ボタンのタグを作成する<button>ボタン</button>を作り、変数と紐づける　１
    button1.textContent = "+1ボタン";
    //<button>中身の文字をtextContntという</button>

    let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";

    let button3 = document.createElement("button");
    button3.textContent = "リセットボタン";

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){//クリックというイベントを読み取る　２
        if(count<100){count++;}
        counter.textContent = count;
        //イベントが起きた場合の処理を記述 ３
    })

    button2.addEventListener("click",function(){
        if(count<= 90){count=count+10;}
        counter.textContent = count;
    })

    button3.addEventListener("click",function(){
        count=0
        counter.textContent = count;
    })
    gameContainer.appendChild(button1);//ボタンを表示する　４
    gameContainer.appendChild(button2);
    gameContainer.appendChild(button3);
    gameContainer.appendChild(counter);
}


function startNumberGuessGame(){
    let count=0
    const gameContainer = document.getElementById("game-container");
    const randomNumber = Math.floor(Math.random() * 100) +1;
    let message = document.createElement('p');
    message.textContent = randomNumber
    let input = document.createElement('input');
    input.type = 'number';
    input.placeholder = '好きな数字を入力してください(1-100)'
    let p=document.createElement("p")
    let counter=document.createElement("p")
    counter.textContent = count
    gameContainer.appendChild(message);
    gameContainer.appendChild(input);

    let button = document.createElement("button")
    button.textContent = "確認"
    button.addEventListener("click",function(){
        // count++;
        // counter.textContent = count;
        const val = parseInt(input.value);
        if(randomNumber == val){
            p.textContent = "正解"
        }
        else if(randomNumber < val){
            p.textContent = "大きい"
        }
        else{
            p.textContent = "小さい"
        }

    })
    gameContainer.appendChild(button);
    gameContainer.appendChild(p);
    gameContainer.appendChild(counter);

    const countDisplay = document.createElement("p")
    button.addEventListener("click",function(){
        count++
        countDisplay.textContent = `試行回数: ${count}`  //バッククォート　＠マーク
    })
    gameContainer.appendChild(countDisplay)

    
}

