var textArea= document.querySelector("#Txt-Input");
var button=document.querySelector("button");
var dothrakiOutput=document.querySelector("#Dothraki");
var valyrianOutput=document.querySelector("#Valyrian");
var hodorOutput=document.querySelector("#Hodor");
var output=[dothrakiOutput,valyrianOutput,hodorOutput];


var gotApis=["https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json","https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json","https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"];

function urlGenerator (i,text) {
    var url = gotApis[i] + "?text=" + text;
    return url;
}

function showTranslation(i,json){
    output[i].innerText=json.contents.translated;
}

function showError(error){
    console.log(`Error: ${error}`);
}

function getTranslation(){
    var inputText=textArea.value;
    for (var i=0; i<3; i++){
        fetch(urlGenerator(i,inputText))
        .then(response=>response.json())
        .then(json=>showTranslation(i,json))
        .catch(showError)
    }
}
       

button.addEventListener("click",getTranslation);