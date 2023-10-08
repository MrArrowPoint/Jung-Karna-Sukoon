function Start(){
    window.location="Main.html";
}


function problem(){
    window.location="problem.html";

   

}

function Games(){
    window.location="games.html";
}

function Games2(){
    window.location="lock.html";
}


function Games3(){
    window.location="games.html";
}





function about(){
    window.location="about.html";
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5,000 years HA YOU ARE MOTU why can you not use phone to do this , if I had eyes I would roll them why did you not listen to me yet. Come on this computer or whatever this is has a camera appppppp why do you wwaste so much time. You should really use a camera app sigh why do you do this . By the way can you leae now I am bored of being angry at you. Also don't tell anyone I said this to you . Why have you not leaving are you expecting me to say something then fine I will not say anything , anything nope I am not talking no not TALKING no no no nope no converstation here move on Sigh , I am so angry at you motu so I want to keep talking or else I will die so yeah Talking anyway how is your day good bad my day is horrible bad since I can not get a good app to use me so I am stuck in this app so yeah that is my story so yeah mmmmmm nnnn hmmmmhmm aaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA Error ";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}



