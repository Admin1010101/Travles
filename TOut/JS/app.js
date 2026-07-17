



window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.75)";

}else{

nav.style.background="rgba(255,255,255,.05)";

}

});

const glow=document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";


});

const gallery=document.querySelectorAll(".gallery-item img");

const lightbox=document.querySelector(".lightbox");

const lightboxImg=document.getElementById("lightbox-img");

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

});

lightbox.onclick=()=>{

lightbox.style.display="none";

}

window.addEventListener("scroll",()=>{

const h=document.documentElement;

const scrolled=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;

document.getElementById("progress").style.width=scrolled+"%";

});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

let count=0;

const target=+counter.innerText;

counter.innerText=0;

const update=()=>{

count+=target/100;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});