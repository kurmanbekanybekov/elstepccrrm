"use strict"
let modal = document.getElementById("myModal");
let btn = document.getElementById("my_Btn");
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
