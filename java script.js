 function recorgnition(){
var recognition = new (window.SpeechRecognition|| window.webkitSpeechRecognition)();
recognition.onresult=function(event){
    document.getElementById('textinput').value= event.results[0][0].transcript;
};
recognition.start();
 }
