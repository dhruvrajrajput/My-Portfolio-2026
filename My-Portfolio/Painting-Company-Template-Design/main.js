// Get the navigation tabs
const tabs = document.querySelectorAll(".navbar-text");

// Add event listeners to each tab
tabs.forEach((tab) => {
  tab.addEventListener("mouseover", function () {
    // Change the color to red
    this.style.color = "#ffffffa1";
    // this.innerHTML = 'Hello';
  });

  tab.addEventListener("mouseout", function () {
    // Reset the color to the original value
    this.style.color = "";
  });
});

// Scroll Down Btn
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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

// Nav Bar 2
// const navbar = document.getElementById('navbar');
// navbar.addEventListener('mouseover', function () {
//     navbar.style.color = 'red';
//   });

//   navbar.addEventListener('mouseout', function () {
//     navbar.style.color = 'white';
//   });

//   function myText() {
//     const element = document.getElementById("bigtext");
//     if (element.classList.contains("bigtext1")) {
//         element.classList.toggle("bigtext2");
//     }
//     else {
//         element.classList.add("bigtext1");
//     }
// }
