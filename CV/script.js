var changeColor = function() {
    var head = document.querySelector("header");
    var foot = document.querySelector("footer");
    var dec = document.getElementsByClassName("title-decorate");

    if (head.style.backgroundColor == "rgb(30, 30, 30)") {
        head.style.backgroundColor = "rgb(128, 0, 0)";
        foot.style.backgroundColor = "rgb(128, 0, 0)";
        for(var i = 0;i<dec.length;i++) {
            dec[i].style.backgroundColor = "rgb(128, 0, 0)";
        }
        document.querySelector("button").setAttribute("class","change-theme btn btn-dark")
    }
    else {
        head.style.backgroundColor = "rgb(30, 30, 30)";
        foot.style.backgroundColor = "rgb(30, 30, 30)";
        for(var i = 0;i<dec.length;i++) {
            dec[i].style.backgroundColor = "rgb(30, 30, 30)";
        }
        document.querySelector("button").setAttribute("class","change-theme btn btn-danger")
    }
}

document.querySelector("button").addEventListener("click",changeColor);