// Services Page Main Paragraph & Successful Page Main Paragraph
const services_Successfyl = document.querySelectorAll(".servicesuccessfyl");
let services_Successfyltext = "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.";
for (let i = 0; i < services_Successfyl.length; i++) {
     services_Successfyl[i].innerHTML = services_Successfyltext;
}

// Services Cards 
const servicescard_3 = document.querySelectorAll(".servicecard3");
let servicetext = "Nam libero tempore, cum soluta nobis est eligendi optio cumque.";
for (let i = 0; i < servicescard_3.length; i++) {
     servicescard_3[i].innerHTML = servicetext;
}

// focus design Page / About Btn & working Page Text 
const focus_working2 = document.querySelectorAll(".fousworkingparagraph");
let focusworkingtext = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt.";
for (let i = 0; i < focus_working2.length; i++) {
     focus_working2[i].innerHTML = focusworkingtext;
}

function aboutbtn() {
     alert("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt.");
}

// Client Page & Latest Page Mains Paragraphs
// const client_Latest = document.querySelectorAll(".clientlatestparagraph");
// let client_Latesttext = "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.";
// for (let i = 0; i < client_Latesttext.length; i++) {
//      client_Latest[i].innerHTML = client_Latesttext;
// }

const client_Latest = document.querySelectorAll(".clientlatestparagraph");
let clientlatesttext = "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.";
for (let i = 0; i < client_Latest.length; i++) {
     client_Latest[i].innerHTML = clientlatesttext;
}

// Client Swiper
const swiper_Card4 = document.querySelectorAll(".swiperparagraph");
let swipertext = "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.";
for (let i = 0; i < swiper_Card4.length; i++) {
     swiper_Card4[i].innerHTML = swipertext;
}

// Latest News Cards Date & Paragraph
const latest_card_date = document.querySelectorAll(".latestdate");
let lastestdatetext = "July 20, 2020 in World";
for (let i = 0; i < latest_card_date.length; i++) {
     latest_card_date[i].innerHTML = lastestdatetext;
}

const latest_card_paragraph = document.querySelectorAll(".latestcardparagraph");
let latestcardtext = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.";
for (let i = 0; i < latest_card_paragraph.length; i++) {
     latest_card_paragraph[i].innerHTML = latestcardtext;
}

// Contact Us Form Send Btn
function sendbtn() {
     alert("!! Thank You So Much !!");
} 