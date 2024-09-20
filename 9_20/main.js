function changeColor(){
document.getElementById("text").style.color="red";
}



//document.getElementById("text").style.color="red";
/*これは、ドキュメントの中の「text」というIDを持っているタグのスタイルの色を赤にしてください。*/
let count = 0;
//document.querySelector("h1").style.color="red";
function increaseCount(){

    count++;
    document.getElementById("counter").innerText=count;
    if(count>4){
        count=0;
    }

}

function herasukaunto(){
    count--;
    document.getElementById("counter").innerText=count;
    if(count<-4){
        count=1;
    }
}  
