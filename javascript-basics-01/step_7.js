var shoeSize = prompt("please enter your shoe size");
var birthYear = prompt("please enter your birth year");

function result(shoeSize,birthYear){
    var result = ((((shoeSize * 2) + 5) * 50)- birthYear ) + 1766;
    return result;
}
alert(result(shoeSize,birthYear))