let randomNumber1=Math.floor((Math.random())*(6))+1; //random no. bw 0 and 6

let randomDiceImage="dice"+randomNumber1+".png";//dice1.png---to dice6.png

let randomImageSource="images/"+randomDiceImage;

let image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//***************************************************** */

let randomNumber2=Math.floor((Math.random())*(6))+1; //random no. bw 0 and 6

let randomDiceImage2="dice"+randomNumber2+".png";//dice1.png---to dice6.png

let randomImageSource2="images/"+randomDiceImage2;

let image2 =document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Player 1 wins!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML="Player 2 wins!"
}
else{
        document.querySelector("h2").innerHTML="Draw!"
    }







