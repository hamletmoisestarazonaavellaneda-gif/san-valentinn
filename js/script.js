const s1 = document.getElementById("screen1");
const s2 = document.getElementById("screen2");
const s3 = document.getElementById("screen3");

const btnVerMas = document.getElementById("btnVerMas");
const btnNo = document.getElementById("btnNo");
const btnSi = document.getElementById("btnSi");
const music = document.getElementById("music");
const cloudLayer = document.querySelector(".cloud-layer");

let scaleYes = 1;
let scaleNo = 1;

/* 🌟 ESTRELLAS */
setInterval(() => {
  if (!s1.classList.contains("active")) return;
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random()*100+"vw";
  star.style.top = Math.random()*60+"vh";
  document.body.appendChild(star);
  setTimeout(()=>star.remove(),5000);
},300);

/* ☁️ NUBES */
setInterval(() => {
  const nube = document.createElement("div");
  nube.className = "cloud";
  nube.style.top = Math.random()*60+"vh";
  nube.style.animationDuration = Math.random()*5+6+"s";
  cloudLayer.appendChild(nube);
  setTimeout(()=>nube.remove(),15000);
},1800);

/* 💕 CORAZONES */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.innerHTML = ["❤️","💖","💘","💕","💓"][Math.floor(Math.random()*5)];
  h.style.left = Math.random()*100+"vw";
  h.style.fontSize = Math.random()*30+25+"px";
  h.style.animationDuration = Math.random()*4+6+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),10000);
},220);

/* 🎵 */
btnVerMas.onclick = () => {
  s1.classList.remove("active");
  s2.classList.add("active");
  music.volume = 0;
  music.play();
  let v = 0;
  const fade = setInterval(()=>{
    v+=0.05; music.volume=v;
    if(v>=1) clearInterval(fade);
  },120);
};

/* ❌ NO */
btnNo.onclick = () => {
  scaleNo -= .08;
  scaleYes += .08;
  btnNo.style.transform = `scale(${Math.max(scaleNo,.2)})`;
  btnSi.style.transform = `scale(${scaleYes})`;
};

/* ✅ SI */
btnSi.onclick = () => {
  s2.classList.remove("active");
  s3.classList.add("active");
  setInterval(lanzarFuegoTexto,1600);
};

/* 💥 PIROTECNIA */
const palabras = ["TE AMO ❤️","TE QUIERO 💕","NIÑA HERMOSA ✨","MI MISS 💖","MAMACITA 😍"];

function lanzarFuegoTexto() {
  if (!s3.classList.contains("active")) return;

  const palabra = palabras[Math.floor(Math.random()*palabras.length)];
  const x = Math.random()*0.7+0.15;
  const y = Math.random()*0.35+0.2;

  for(let i=0;i<18;i++){
    setTimeout(()=>{
      const rocket=document.createElement("div");
      rocket.className="rocket";
      rocket.style.left=x*innerWidth+"px";
      rocket.style.top=innerHeight-i*45+"px";
      document.body.appendChild(rocket);
      setTimeout(()=>rocket.remove(),80);

      const trail=document.createElement("div");
      trail.className="rocket-trail";
      trail.style.left=x*innerWidth+"px";
      trail.style.top=innerHeight-i*45+"px";
      document.body.appendChild(trail);
      setTimeout(()=>trail.remove(),1000);
    },i*65);
  }

  setTimeout(()=>{
    const t=document.createElement("div");
    t.className="fire-text";
    t.innerText=palabra;
    t.style.left=x*innerWidth+"px";
    t.style.top=y*innerHeight+"px";
    document.body.appendChild(t);
    setTimeout(()=>t.remove(),3500);

    confetti({particleCount:220,spread:360,startVelocity:55,colors:["#ff004c","#ff4d6d","#fff"],origin:{x,y}});
    confetti({particleCount:80,spread:360,startVelocity:40,shapes:["heart"],colors:["#ff1e56"],origin:{x,y}});
  },1400);
}