//dynamically adding audio
function addSound() {
    var footer = document.getElementsByClassName("footer");
    var para = document.createElement("p");
    var audio = document.createElement("audio");
    audio.src = "../Audio/Piano.mp3";
    audio.controls;
    para.innerHTML = "Sfatul medicului";
    para.appendChild(audio);
    footer[0].insertBefore(para, footer[0].firstChild);
}

addSound();
