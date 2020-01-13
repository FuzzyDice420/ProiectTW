

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

var btn = document.createElement("button");
btn.innerHTML = "Sterge footerul!"

document.body.appendChild(btn);

function deleteFooter() {
    var footer = document.getElementsByClassName("footer");
    document.body.removeChild(footer[0]);
}

btn.onclick = deleteFooter();
