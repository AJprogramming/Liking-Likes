var count = 9;
var count2 = 12;
var count3 = 9;

var likecounter = document.querySelector(".likes")
var likecounter2 = document.querySelector(".likes-2")
var likecounter3 = document.querySelector(".likes-3")

function liker(element){
    count++;
    likecounter.innerText = count + " like(s)";
}
function liker2(element){
    count2++;
    likecounter2.innerText = count2 + " like(s)";
}
function liker3(element){
    count3++;
    likecounter3.innerText = count3 + " like(s)";
}