// for displaying the navbar and hiding while scroll
const nav = document.querySelector("nav");

let lastScrollY =  window.scrollY;

window.addEventListener("scroll" , () => {
    if(lastScrollY < window.scrollY){
        nav.classList.add("nav__hidden");
    }else{
        nav.classList.remove("nav__hidden");
    }

    lastScrollY= window.scrollY;
})

// for scroll back to top button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}