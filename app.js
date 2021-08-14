var btn_translate = document.querySelector("#btn-translate");
var inptxt = document.querySelector("#txt-inpt");
var optxt= document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL (input){

    return serverURL+"?"+"text="+input
}

// function errorHandler(error){
//     console.log("error Occured",error);
//     alert("server Showing error");
// }

function btnClickHandler(){

    var inp_txt = inptxt.value;

    fetch(getTranslationURL(inp_txt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        optxt.innerText = translatedText;
    })

};

btn_translate.addEventListener("click",btnClickHandler)