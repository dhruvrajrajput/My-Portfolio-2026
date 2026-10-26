// <!-- Nvbar JS -->
$(document).ready(function () {
     $(window).scroll(function () {
          $val = $(window).scrollTop();
          if ($val > 10) {
               $('.container .nav').addClass('active');
          } else {
               $('.container .nav').removeClass('active');
          }
     })

     $('.container .nav h1').click(function () {
          $('.container .nav ul.menu').toggleClass('display');
     })
})

// <!-- Swiper Js -->
var swiper = new Swiper(".mySwiper", {
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
          delay: 2500,
          disableOnInteraction: false,
     },
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
     },
});

//     <!-- Scroll Down Btn -->
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
     } else {
          mybutton.style.display = "none";
     }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
}


// My JS Run Types

// Client Image Opacity Function
function clientimg1(x) {
     x.style.opacity = "1.0";
     x.style.transition = "0.5s";
}

function clientimg2(x) {
     x.style.opacity = "0.5";
     x.style.transition = "0.5s";
}

// everyone Ainotion card Text
const ainotionCard3 = document.querySelectorAll(".ainotiontext");
let text = "Nam libero tempore soluta nobis";
for (let i = 0; i < ainotionCard3.length; i++) {
     ainotionCard3[i].innerHTML = text;
}

const everyonecard3 = document.querySelectorAll(".everyoneparagraph");
let everyonetext = "Lorem ipsum dolor sit amet nam consectetur adipiscing elit eiusmo tempor incididunt.";
for (let i = 0; i < everyonecard3.length; i++) {
     everyonecard3[i].innerHTML = everyonetext;
}

// Data digital tools & Satisfaction Paragraph
const data_Satisfaction = document.querySelectorAll(".dataparagraph");
let datasatisfactiontext = "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda omnis dolor repellendus. Temporibus autem quibusdam debitis aut rerum necessitatibus saepe eveniet voluptates sint.";
for (let i = 0; i < data_Satisfaction.length; i++) {
     data_Satisfaction[i].innerHTML = datasatisfactiontext;
}

// Our Client Swiper Text
const clientSwiper = document.querySelectorAll(".swipertext");
let clientswipertext = "“Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.”"; 
for (let i = 0; i < clientSwiper.length; i++) {
     clientSwiper[i].innerHTML = clientswipertext;
}

// Businesses Cards Text 
const businessesCard = document.querySelectorAll(".businessesparagraph");
let businessestext = "Neque porro quisquam esqui dolom ipsut quia dolor sit amet namlien consectetur adipisci.";
for (let i = 0; i < businessesCard.length; i++) {
     businessesCard[i].innerHTML = businessestext;
}

// Plans & Pricing Card Click To Button
function plans(x) {
     alert("Thank You So Much!!");
} 