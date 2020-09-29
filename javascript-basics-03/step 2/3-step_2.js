var test = document.getElementById("texte");

document.querySelector("body").addEventListener("click", function(arg){
    var link = arg.target;

    if (arg.target.id == "hide"){ test.style.display = "none"; }

   else if (arg.target.id == "show"){ test.style.display = "block"; }

});