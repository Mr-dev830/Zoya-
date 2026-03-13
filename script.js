let opened = false;

function openGift(){

if(opened) return;

opened = true;

document.querySelector(".intro").style.display = "none";

document.getElementById("story").style.display = "block";

document.getElementById("music").play();

startTyping();

confetti();

}


function startTyping(){

let text="Zoya ❤️ The day you came into my life everything changed. Your smile makes my world brighter. I feel lucky every day to have you. Happy Birthday my love 🎂"

let i=0

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i)

i++

setTimeout(typing,40)

}

}

typing()

}


function confetti(){

for(let i=0;i<50;i++){

let heart=document.createElement("div")

heart.innerHTML="❤️"

heart.style.position="fixed"
heart.style.left=Math.random()*100+"vw"
heart.style.top="-10px"
heart.style.fontSize="20px"

document.body.appendChild(heart)

}

}
