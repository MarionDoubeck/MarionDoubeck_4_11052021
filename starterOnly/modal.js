function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  document.querySelector(".bground").style.display = "block";
  document.querySelector(".modal-body").style.display = "block";
  document.querySelector(".modal-body2").style.display = "none";
  var heightModal=document.querySelector(".modal-body").style.height;
}

//validation
document.querySelectorAll(".btn-submit").forEach((btn) => btn.addEventListener("click", launchValidate));

function launchValidate() {
  document.querySelector(".modal-body").style.display = "none";
  document.querySelector(".modal-body2").style.display = "block";
  document.querySelector(".modal-body2").style.height=heightModal;
}

document.querySelectorAll(".btn-close").forEach((btn) => btn.addEventListener("click", closeModal));
document.querySelectorAll(".close").forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal(){
  document.querySelector(".bground").style.display = "none";
}
