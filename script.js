/* =========================
   DONARO WEBSITE SCRIPT
========================= */


// Smooth scrolling for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});



// Product card reveal animation

const products = document.querySelectorAll(".product");


const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},

{

threshold:0.2

}

);



products.forEach(product=>{


product.style.opacity="0";

product.style.transform="translateY(50px)";

product.style.transition="all 0.8s ease";


observer.observe(product);


});




// Header shadow on scroll

window.addEventListener("scroll",()=>{


const header=document.querySelector("header");


if(window.scrollY > 50){

header.style.boxShadow=
"0 10px 30px rgba(212,175,55,0.15)";

}

else{

header.style.boxShadow="none";

}


});




// Welcome message

window.addEventListener("load",()=>{


console.log(
"Welcome to DONARO Luxury Leather Collection"
);


});