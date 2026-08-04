// Dark Mode

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeButton.innerHTML="☀";

}else{

themeButton.innerHTML="🌙";

}

});


// Fade Animation

const cards=document.querySelectorAll("article");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");

}

});

});

cards.forEach(card=>observer.observe(card));


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});