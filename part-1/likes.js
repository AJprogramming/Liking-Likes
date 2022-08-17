var count = 3;
var countinglikes = document.querySelector(".likes");

function liker(element){
    count++;
    countinglikes.innerText = count + " like(s)";
}