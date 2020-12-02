var textArea= document.querySelector("#Txt-Input");
var button=document.querySelector("button");
var dothrakiOutput=document.querySelector("#Dothraki");
var valyrianOutput=document.querySelector("#Valyrian");
var hodorOutput=document.querySelector("#Hodor");
var output=[];


var gotApis=["https://api.funtranslations.com/translate/dothraki.json","https://api.funtranslations.com/translate/valyrian.json","https://api.funtranslations.com/translate/hodor.json"];

function urlGenerator (i,text) {
    var url = gotApis[i] + "?text=" + text;
    return url;
}

function showTranslation(json){
    output.push(json.contents.translated);
    if (i=2){
        dothrakiOutput.innerText="Dothraki: "+output[0];
        valyrianOutput.innerText="Valyrian: "+output[1];
        hodorOutput.innerText="Hodor: "+output[2];
    }
}

function showError(error){
    console.log(`Error: ${error}`);
}

function getTranslation(){
    var inputText=textArea.value;
    for (var i=0; i<3; i++){
        fetch(urlGenerator(i,inputText))
        .then(response=> response.json())
        .then(json=>showTranslation(json))
        .catch(showError)
    }
}

button.addEventListener("click",getTranslation);
