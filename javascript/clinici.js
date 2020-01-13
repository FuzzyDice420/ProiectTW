/*function setRandomColor() {
	document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
}

var id = setInterval(setRandomColor, 1000); 	

var btn = document.createElement('button');
btn.innerHTML = 'Selectez culoare';
document.getElementsByClassName('footer')[0].appendChild(btn);

function stopColor() {
	clearInterval(id);
}

btn.onclick = stopColor();*/

function randomColor () {     //creaza o culoare random pentru fundal
    var randomColor = Math.floor(Math.random()*1677721).toString(16);
    document.getElementsByClassName('mid-container')[0].style.backgroundColor = "#"+randomColor;
}

var id = setInterval(randomColor, 1000);

var btn = document.createElement("button");
btn.innerHTML = "Selecteaza culoarea";
document.getElementsByClassName("footer")[0].appendChild(btn);
btn.onclick = function(){     //la apasarea butonului se opreste schimbarea culorii
    clearInterval(id);
}


