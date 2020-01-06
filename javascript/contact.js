//dynamically adding an image
function addImage() {
    var img = document.createElement("img");
    img.src = "../images/hospital-logo.jpg";
    document.getElementsByTagName("body")[0].appendChild(img);
}

addImage();