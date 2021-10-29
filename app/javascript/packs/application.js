// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require('jquery').start()
require("channels")

require("@fortawesome/fontawesome-free");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// FOOTER POSITION

document.addEventListener('resize', function(){footerPosition();});
document.addEventListener("DOMContentLoaded", function(){footerPosition();});

window.onresize = function () {
  

  let  html = document.getElementById('html');
  let  body = document.getElementById('body');
  let  main = document.getElementById('main');
  let  footer = document.getElementById('footer');
  let  bar = document.getElementById('bar');

  if ((body.offsetHeight - main.offsetHeight) > html.offsetHeight) {

    bar.style.height = body.offsetHeight - main.offsetHeight  - 56 + "px";
    bar.style.marginBottom = 16 +  "px";
    footer.style.marginBottom = bar.offsetHeight - footer.offsetHeight + "px";

  } else  {

    bar.style.height = footer.offsetHeight  + 16 + "px";
    bar.style.marginBottom = 16 +  "px";

  } 

  alert('test');
}

function footerPosition() {

  let  html = document.getElementById('html');
  let  body = document.getElementById('body');
  let  main = document.getElementById('main');
  let  footer = document.getElementById('footer');
  let  bar = document.getElementById('bar');

  if ((body.offsetHeight - main.offsetHeight) > html.offsetHeight) {

    bar.style.height = body.offsetHeight - main.offsetHeight  - 56 + "px";
    bar.style.marginBottom = 16 +  "px";
    footer.style.marginBottom = bar.offsetHeight - footer.offsetHeight + "px";

  } else  {

    bar.style.height = footer.offsetHeight  + 16 + "px";
    bar.style.marginBottom = 16 +  "px";

  }


   alert('test');
}

// SIDE BAR MAIN MENU

// Close the sidebar with the close button
window.w3_close1 = function () {

  // Get the Sidebar
  let mySidebar = document.getElementById("mySidebar1");
  // Get the DIV with overlay effect
  let overlayBg = document.getElementById("myOverlay1");

  mySidebar.style.display = "none";
  mySidebar.style.zIndex = "0";
  overlayBg.style.display = "none";
  overlayBg.style.zIndex = "0";

}

// Open the sidebar
window.w3_open1 = function () {

  // Get the Sidebar
  let mySidebar = document.getElementById("mySidebar1");
  // Get the DIV with overlay effect
  let overlayBg = document.getElementById("myOverlay1");

  // Get the Sidebar
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    mySidebar.style.zIndex = "0";
    overlayBg.style.display = "none";
    overlayBg.style.zIndex = "0";
     
  } else {
    mySidebar.style.display = 'block';
    mySidebar.style.zIndex = "6";
    overlayBg.style.display = "block";
    overlayBg.style.zIndex = "5";
  }
}

// SIDE BAR HEADER MENU

// Close the sidebar
window.w3_close2 = function () {

  let mySidebar = document.getElementById("mySidebar2");
  let overlayBg = document.getElementById("myOverlay2");
  mySidebar.style.display = "none";
  mySidebar.style.zIndex = "0";
  overlayBg.style.display = "none";
  overlayBg.style.zIndex = "0";
}

// Open the sidebar
window.w3_open2 = function () {

  let mySidebar = document.getElementById("mySidebar2");
  let overlayBg = document.getElementById("myOverlay2");
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    mySidebar.style.zIndex = "0";
    overlayBg.style.display = "none";
    overlayBg.style.zIndex = "0";

  } else {
    mySidebar.style.display = 'block';
    mySidebar.style.zIndex = "6";
    overlayBg.style.display = "block";
    overlayBg.style.zIndex = "5";
  }
}

// SOTEK LOGO

