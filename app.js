var btn-translate = document.querySelector(#btn-translate);
var inptxt = document.querySelector(#txt-inpt);
var optxt= document.querySelector(#output);

var serverURL = "";

function getTranslationURL (input){

    return serverURL+"?"+"text"+input
}

function (){

}

btn-translate.addEventHandler("click",btnClickHandler);