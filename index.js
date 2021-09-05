var Name = document.querySelector("#name");
var Bday = document.querySelector("#date");
var Btn = document.querySelector("#btn");
var Output = document.querySelector("#output");
var Loading = document.querySelector("#loading");
var EmotionGif = document.querySelector("#emotion-gif");

Btn.addEventListener("click", showResult);

function showResult(){
    Output.style.display = "none";
    EmotionGif.style.display = "none";
    Loading.style.display="block";
    setTimeout(function(){ hideBar(); calculateLeapYear(); }, 3000);
}

function calculateLeapYear(){
        var year = Bday.value.slice(0,4);
        var condition2= Number(year)%4 == 0 && Number(year)%100 != 0;
        if(Number(year) == 0){
            Output.style.display = "block";
        Output.innerText = `Please Enter Your Birthday 🧐`;
        }
        else if(Number(year)%400 == 0 || condition2){
            Output.style.display = "block";
        Output.innerText = `Congratulations ${Name.value}, Your Birth year is a leap year!!`;
        EmotionGif.style.display = "block";
        var EmoGif = "Images/happy_face.gif";
        callGif(EmoGif);
        } 
        else{
            Output.style.display = "block";
        Output.innerText = `Oops ${Name.value}, Your Birth year is not a leap year!!`;
        EmotionGif.style.display = "block";
        var EmoGif = "Images/sad_star.gif";
        callGif(EmoGif);
        }
      
}

function hideBar(){
    Loading.style.display="none"
}

function callGif(EmoGif){
    EmotionGif.src= EmoGif;
    EmotionGif.style.width = "13rem";
    EmotionGif.style.height = "13rem";
}