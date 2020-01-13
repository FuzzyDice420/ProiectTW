

function openForm() {
    document.getElementById("loginPopup").style.display = "block";
}
  
function closeForm() {
    document.getElementById("loginPopup").style.display = "none";
}

/*
function closeColor() {
    document.getElementById("colorPicker").style.display = "none";
}

var settings = document.getElementsByClassName("settings");
settings[0].addEventListener('click', function() {
    document.getElementById("colorPicker").style.display = "block";
})

var color = document.getElementById("color");
var fontSize = document.getElementById("font");

color.onselect = function () {
    document.getElementsByTagName("body").style.backgroundColor = color;
}

fontSize.oninput = function() {
    document.getElementsByTagName("body").style.fontSize = fontSize;
}*/
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('loginPopup');
    if (event.target == modal) {
      closeForm();
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

var invalidities = [];

function inputCheck(input) {
    if (input.value.match(/.{8,}/g)) {
        var element = document.querySelector(".form-container li:nth-child(1)");
        invalidities.push("Must be at least 8 characters long. \n");
        element.classList.remove("invalid");
        element.classList.add("valid");
    }
    else {
        var element = document.querySelector(".form-container li:nth-child(1)");
        element.classList.remove("valid");
        element.classList.add("invalid");
    }

    if (input.value.match(/(.*[a-z].*)/g)) {
        var element = document.querySelector(".form-container li:nth-child(2)");
        invalidities.push("Must contain at least 1 lowercase character. \n");
        element.classList.remove("invalid");
        element.classList.add("valid");
    }
    else {
        var element = document.querySelector(".form-container li:nth-child(2)");
        element.classList.remove("valid");
        element.classList.add("invalid");
    }

    if (input.value.match(/(.*[A-Z].*)/g)) {
        var element = document.querySelector(".form-container li:nth-child(3)");
        invalidities.push("Must contain at least 1 uppercase character. \n");
        element.classList.remove("invalid");
        element.classList.add("valid");
    }
    else {
        var element = document.querySelector(".form-container li:nth-child(3)");
        element.classList.remove("valid");
        element.classList.add("invalid");
    }

    if (input.value.match(/(.*[0-9].*)/g)) {
        var element = document.querySelector(".form-container li:nth-child(4)");
        invalidities.push("Must contain at least 1 number. \n");
        element.classList.remove("invalid");
        element.classList.add("valid");
    }
    else {
        var element = document.querySelector(".form-container li:nth-child(4)");
        element.classList.remove("valid");
        element.classList.add("invalid");
    }

    if (input.value.match(/[-+_!@#$%^&*.,?]/g)) {
        var element = document.querySelector(".form-container li:nth-child(5)");
        invalidities.push("Must contain at least a special character. \n");
        element.classList.remove("invalid");
        element.classList.add("valid");
    }
    else {
        var element = document.querySelector(".form-container li:nth-child(5)");
        element.classList.remove("valid");
        element.classList.add("invalid");
    }
}

var errorMessage = "";

for (i = invalidities.length; i > 0; i--) {
    errorMessage.concat(invalidities[i]);
    invalidities.pop();
}

pswInput = document.getElementById("psw");
pswInput.addEventListener('keyup', function() {
    inputCheck(this);
});

pswInput.setCustomValidity(errorMessage);
console.log(errorMessage);

/*var element = document.querySelector(".form-container li:nth-child(1)");
element.classList.remove("invalid");
element.classList.add("valid");*/

fetch("http://api.openweathermap.org/data/2.5/weather?q=Bucharest&APPID=9a87a523974421490a47db1da3292638")
.then(function(response) {
    var fetchData = null;
    response.json().then(function(data) {
        console.log("data fetched successfuly ", data);
        fetchData = data;
        var para = document.createElement("p");
        para.innerHTML = "Vremea in Bucuresti:"
        var para2 = document.createElement("p");
        para2.innerHTML = "Temperatura: " + fetchData.main[0] + "Feels like: " + fetchData.main[1] + "Viteza vant: " + fetchData.wind[0];
        document.getElementsByClassName("footer")[0].appendChild(para);
        document.getElementsByClassName("footer")[0].appendChild(para2);
    });
})
.catch(function(error) {
    console.log("Eroarea este ", error);
})

/*var loginBtn = document.getElementsByClassName("btn")[0];
loginBtn.onclick = function () {
    if (errorMessage) {
        Swal(errorMessage);
    }
}*/



