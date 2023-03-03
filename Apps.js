var buttonTranslate = document.querySelector("button-translation");
var inputTxt = document.querySelector("Input-Text");
var outputTxt = document.querySelector("Output-Text");
var ServerURL = "https://api.funtranslations.com/translate/morse.json"

function getTranslationURL(text){
    return ServerURL + "?" + "text=" + text 
}
function errorHandler(error){
    console.log("error occured ..", error );
    alert("Somthing wrong check Once Or Try after some time")
}
function clickHandler(){
    var inputText = inputTxt.value;
     fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json =>{
        var translatedText = json.contents.translated;
        outputTxt.innerHTML = translatedText;
     })
     .catch(errorHandler)
};
buttonTrans.addEventListener("click" ,clickHandler);