const message =
  "Zoya ❤️ The day you came into my life, everything changed. Your smile makes my world brighter, your presence makes my heart calmer, and your existence makes life feel more beautiful. Today is your day, and I just want to remind you how deeply special you are. Happy Birthday, my love 🎂✨";

const images = [
  "assets/photos/IMG_20260126_222949_020.jpg",
  "assets/photos/IMG_20260301_022917_950.jpg"
];

let opened = false;
let typingStarted = false;
let slideIndex = 0;

function openGift(){
  if(opened) return;
  opened = true;

  document.getElementById("giftBox").classList.add("open");

  setTimeout(() => {
    document.getElementById("hero").classList.add("hidden");
    document.getElementById("story").classList.remove("hidden");
    startTyping();
    startSlideshow();
    startHearts();
    burstHearts();

    const music = document.getElementById("music");
    if (music) {
      music.play().catch(() => {});
    }
  }, 900);
}

function startTyping(){
  if(typingStarted) return;
  typingStarted = true;

  const typingEl = document.getElementById("typing");
  typingEl.innerHTML = "";

  let i = 0;
  function type(){
    if(i < message.length){
      typingEl.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 28);
    }
  }
  type();
}

function startSlideshow(){
  const slideImage = document.getElementById("slideImage");
  if(!slideImage || images.length === 0) return;

  setInterval(() => {
    slideImage.style.opacity = "0";
    slideImage.style.transform = "scale(0.97)";

    setTimeout(() => {
      slideIndex = (slideIndex + 1) % images.length;
      slideImage.src = images[slideIndex];
      slideImage.style.opacity = "1";
      slideImage.style.transform = "scale(1)";
    }, 400);
  }, 2600);
}

function startHearts(){
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 18 + 14) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 380);
}

function burstHearts(){
  for(let i = 0; i < 24; i++){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "✨";
    heart.style.left = 40 + Math.random() * 20 + "vw";
    heart.style.fontSize = (Math.random() * 16 + 14) + "px";
    heart.style.animationDuration = (Math.random() * 2 + 2.8) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

function showFinalMessage(){
  document.getElementById("finalMessage").classList.remove("hidden");
}

function createStars(){
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const stars = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8,
    d: Math.random() * 0.8 + 0.2
  }));

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(const star of stars){
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();

      star.y += star.d;
      if(star.y > canvas.height){
        star.y = -5;
        star.x = Math.random() * canvas.width;
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

createStars();
