var buttonTrans = document.querySelectorAll("button");
var inputTxt = document.querySelector("Input-Text");
var outputTxt = document.querySelector("Output-Text");
var MorseURL = "https://api.funtranslations.com/translate/morse.json";

function getTransURL(text){
    return MorseURL + "?" + "text=" + text ;
}
function errorHandler(error){
    console.log("error occured ..", error );
    alert("Somthing wrong check Once Or Try after some time");
}
function clickHandler(){
    var inputText = inputTxt.value ;
     fetch(getTransURL(inputTxt))
     .then(response => response.json())
     .then(json =>{
        var translatedText = json.contents.translated;
        outputTxt.innerHTML = translatedText;
     })
     .catch(errorHandler)
}
buttonTrans.addEventListener("click" clickHandler);