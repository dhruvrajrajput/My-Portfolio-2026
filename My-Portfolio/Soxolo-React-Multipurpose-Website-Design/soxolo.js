// OnClick Active Class Navbar
var header = document.getElementById("myDIV");
var menulinks = document.getElementsByClassName("menu-link");
for (var i = 0; i < menulinks.length; i++) {
    menulinks[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("menu-link-home");
        current[0].className = current[0].className.replace("menu-link-home", "");
        this.className += " menu-link-home";
    });
}

// Text US For Loops Using Code //
const collection = document.querySelectorAll(".firstcard");
let text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.";
for (let i = 0; i < collection.length; i++) {
    collection[i].innerHTML = text;
}

// Our Services Cards
const services_card = document.querySelectorAll(".servicecard");
let servicetext = "There are many variations of passages of available.";
for (let i = 0; i < services_card.length; i++) {
    services_card[i].innerHTML = servicetext;
}

// Expert Team Card
const TeamCard3 = document.querySelectorAll(".teamcard");
let teamtext = "When an unknown printer took a galley of type and scrambled it to make a type specimen book";
for (let i = 0; i < TeamCard3.length; i++) {
    TeamCard3[i].innerHTML = teamtext;
}

// Marketing 
const Marketing3 = document.querySelectorAll(".digitalcard3");
let marketingtext = "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore aliquam quaerat voluptatem."
for (let i = 0; i < Marketing3.length; i++) {
    Marketing3[i].innerHTML = marketingtext;
}

// Latest News Heading
const latestNews_heading = document.querySelectorAll(".latestnewsheading");
let latestNewstext = "Dignissimos Ducimus Qui";
for (let i = 0; i < latestNewstext.length; i++) {
    latestNews_heading[i].innerHTML = latestNewstext;
}

// Contact Forms Send Btn Onclick 
function sendbtn() {
    alert("Thank You So Much !!")
}