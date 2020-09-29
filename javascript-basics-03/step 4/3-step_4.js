document.querySelector("button").addEventListener("click", function () {
    if (document.querySelector("#password").value == document.querySelector("#confirmation").value) {
        document.querySelector("#password").style.borderColor = "none";
        document.querySelector("#confirmation").style.borderColor = "none";
    }
    else{ document.querySelector("#password").style.borderColor = "red";
    document.querySelector("#confirmation").style.borderColor = "red";}
});


