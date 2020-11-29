var textArea= document.querySelector("#Txt-Input");
var button=document.querySelector("button");
var outputDiv=document.querySelector("#Txt-Output");

function urlGenerator(text){
    var url= "https://api.funtranslations.com/translate/minion.json?text="+text;
    return url;
}

function showTranslation(json){
    outputDiv.innerText=json.contents.translated;
}

function showError(error){
    console.log(`Error: ${error}`);
}

function getTranslation(){
    var inputText=textArea.value;
    fetch(urlGenerator(inputText))
        .then(response=>response.json())
        .then(json=>showTranslation(json))
        .catch(showError)
}

button.addEventListener("click",getTranslation);