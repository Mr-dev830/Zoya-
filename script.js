const secretCode = "1203";

function checkCode(){

let input = document.getElementById("codeInput").value.trim();

if(input===secretCode){

document.getElementById("lockScreen").style.display="none"

document.getElementById("mainSite").style.display="block"

}else{

document.getElementById("error").innerText="Wrong code ❤️"

}

}


function openGift(){

document.getElementById("music").play()

startTyping()

confetti()

}

}


function startTyping(){

document.getElementById("typing").innerHTML="";

let text="Zoya ❤️ The day you came into my life everything changed. Your smile makes my world brighter. I feel lucky every single day to have you. Happy Birthday my princess 🎂❤️"

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

for(let i=0;i<40;i++){

let heart=document.createElement("div")

heart.innerHTML="❤️"

heart.style.position="fixed"

heart.style.left=Math.random()*100+"vw"

heart.style.top="-10px"

heart.style.fontSize="20px"

document.body.appendChild(heart)

}

}
