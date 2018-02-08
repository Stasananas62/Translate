
const sourceLangSelection = document.querySelector('.source-lang-selection');
const targetLangSelection = document.querySelector('.target-lang-selection');

const sourceTextInput = document.querySelector('#sourceTextInput');
const targetTextInput = document.querySelector('#targetTextInput');

const getTranslationButton = document.querySelector('#getTranslation');


function init() {
    getTranslationButton.onclick = function () {
        return processState()
    };

    sourceTextInput.onkeydown = function () {
        setTimeout(function () {
            return processState()
        }, 300);
    };

    targetLangSelection.onclick = function () {
        return processState()
    };

    sourceLangSelection.onclick = function () {
        return processState()
    };
}


function processState() {

    let sourceText = sourceTextInput.value;
    let sourceLang = sourceLangSelection.value;
    let targetLang = targetLangSelection.value;

    let apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(sourceText)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            let translatedText = '';
            data[0].map(item => {
                translatedText += item[0]
            });
            targetTextInput.value = translatedText
        }).catch(console.log)
}

init();
