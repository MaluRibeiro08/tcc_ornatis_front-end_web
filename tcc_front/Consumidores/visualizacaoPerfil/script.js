"use strict";

var inicio = document.querySelector("#linkInicio");

inicio.addEventListener("click", function (){
    var div = document.querySelector("#containerInicio");

    if(div.style.display === "none") {
        div.style.display = "block;"
    }

    else {
        div.style.display = "none";
    }
});