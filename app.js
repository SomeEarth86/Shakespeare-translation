var btn_translate = document.querySelector("#btn-translate");
var inptxt = document.querySelector("#txt-inpt");
var optxt = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(input) {

    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error Occured", error);
    alert("server Showing error");
}

function adjustTextareaHeight(element) {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
}

function initializeResponsiveFeatures() {
    // Auto-resize textarea as user types
    inptxt.addEventListener('input', function () {
        adjustTextareaHeight(this);
    });

    // Disable button while processing to prevent multiple requests
    function disableButton() {
        btn_translate.disabled = true;
        btn_translate.style.opacity = '0.7';
        btn_translate.innerText = 'Translating...';
    }

    function enableButton() {
        btn_translate.disabled = false;
        btn_translate.style.opacity = '1';
        btn_translate.innerText = 'Translate to Classic';
    }

    // Update the btnClickHandler
    function btnClickHandler() {
        var inp_txt = inptxt.value;
        if (!inp_txt.trim()) {
            alert('Please enter some text to translate');
            return;
        }

        disableButton();

        fetch(getTranslationURL(inp_txt))
            .then(response => response.json())
            .then(json => {
                var translatedText = json.contents.translated;
                optxt.innerText = translatedText;
            })
            .catch(errorHandler)
            .finally(() => {
                enableButton();
            });
    }

    // Remove old event listener and add new one
    btn_translate.removeEventListener('click', btnClickHandler);
    btn_translate.addEventListener('click', btnClickHandler);
}

// Initialize responsive features when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeResponsiveFeatures);