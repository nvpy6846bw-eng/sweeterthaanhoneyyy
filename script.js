/*================================
 SWEETER THAN HONEYY
 Website Interactions
================================*/


console.log("Sweeter Than Honeyy website loaded");



/*================================
SCROLL ANIMATION
================================*/


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:.15

});



sections.forEach(section=>{


observer.observe(section);


});







/*================================
FAQ ACCORDION
================================*/


const faqButtons = document.querySelectorAll(".faqItem button");



faqButtons.forEach(button=>{


button.addEventListener("click",()=>{


const answer = button.nextElementSibling;

const icon = button.querySelector("span");



if(answer.style.maxHeight){


answer.style.maxHeight = null;

icon.textContent="+";


}

else{


document.querySelectorAll(".answer").forEach(item=>{


item.style.maxHeight=null;


});



document.querySelectorAll(".faqItem span").forEach(item=>{


item.textContent="+";


});



answer.style.maxHeight = answer.scrollHeight + "px";


icon.textContent="-";


}


});


});







/*================================
GALLERY IMAGE POPUP
================================*/


const images = document.querySelectorAll(".galleryItem img");



images.forEach(image=>{


image.addEventListener("click",()=>{


const popup = document.createElement("div");


popup.className="imagePopup";



popup.innerHTML = `

<img src="${image.src}">

`;



document.body.appendChild(popup);



popup.addEventListener("click",()=>{


popup.remove();


});


});


});








/*================================
POPUP STYLE
================================*/


const popupStyle = document.createElement("style");



popupStyle.innerHTML = `


.imagePopup{


position:fixed;

inset:0;

background:rgba(0,0,0,.75);

display:flex;

justify-content:center;

align-items:center;

z-index:9999;

padding:25px;

cursor:pointer;

}



.imagePopup img{


max-width:90%;


max-height:90%;


border-radius:30px;


border:5px solid #ffd3e3;


box-shadow:

0 0 50px rgba(230,111,155,.7);


}



`;



document.head.appendChild(popupStyle);







/*================================
NAVBAR SHADOW
================================*/


const nav = document.querySelector("nav");



window.addEventListener("scroll",()=>{


if(window.scrollY > 40){


nav.style.boxShadow =

"0 10px 35px rgba(212,76,130,.2)";


}

else{


nav.style.boxShadow="none";


}


});







/*================================
BUTTON HOVER EFFECT
================================*/


const links = document.querySelectorAll("a");



links.forEach(link=>{


link.addEventListener("mouseenter",()=>{


link.style.transform="translateY(-3px)";


});



link.addEventListener("mouseleave",()=>{


link.style.transform="translateY(0)";


});


});







/*================================
SMOOTH ORDER MESSAGE
================================*/


const orderButtons = document.querySelectorAll(".orderButton");


orderButtons.forEach(button=>{


button.addEventListener("click",()=>{


console.log("Customer is ordering Sweeter Than Honeyy treats");


});


});
