function Start(){
    window.location="Main.html";
}


function problem(){
    window.location="problem.html";
}



function about(){
    window.location="about.html";
}


function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}



function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Jung Karna is an polotical ideology and country made by daniyal c , Jung karna belives in socalism totalitarianism authoritarianism country! Fun fact Jung Karna Sukoon is supposed to sound like the urdu word for peace and war! Also your leader is Daniyal untill he dies and then a new leader will be chosen";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}
