function negrito(){
    document.getElementById("texto").style.fontWeight = "bold";
}
function italico(){
    document.getElementById("texto").style.fontStyle = "italic";
}

function left(){
    document.getElementById("texto").style.textAlign = "left";
}
function center(){
    document.getElementById("texto").style.textAlign = "center";
}
function right(){
    document.getElementById("texto").style.textAlign = "right";
}

function uppercase(){
    document.getElementById("texto").style.textTransform = "uppercase";
}
function lowercase(){
    document.getElementById("texto").style.textTransform = "lowercase";
}
function capitalize(){
    document.getElementById("texto").style.textTransform = "capitalize";
}

function limparTexto(){
    document.getElementById("texto").style.fontWeight = "normal";
    document.getElementById("texto").style.fontStyle = "normal";
    document.getElementById("texto").style.textAlign = "left";
    document.getElementById("texto").style.textTransform = "none";
    document.getElementById("texto").value="";

}