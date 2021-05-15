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
}

//validation
document.querySelectorAll(".btn-submit").forEach((btn) => btn.addEventListener("click", launchValidate));

function launchValidate() {
  var heightModal=document.querySelector(".modal-body").offsetHeight;
  document.querySelector(".modal-body").style.display = "none";
  document.querySelector(".modal-body2").style.display = "block";
  let HM=heightModal.toString();
  document.querySelector(".modal-body2").style.height=HM+"px";
}

//fermeture
document.querySelectorAll(".btn-close").forEach((btn) => btn.addEventListener("click", closeModal));
document.querySelectorAll(".close").forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal(){
  document.querySelector(".bground").style.display = "none";
}

//TESTS DU QUESTIONNAIRE
//Test prénom
let prenom=document.getElementById('first');
const logPrenom = document.getElementById('logPrenom');
prenom.addEventListener('change', prenomErreur);
function prenomErreur(e) {
  prenom.style.borderWidth="5px";
  if (e.target.value.length>1){
    prenom.style.borderColor="green";
    logPrenom.style.display="none";
  }else{
    prenom.style.borderColor="red";
    logPrenom.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer 2 caractères ou plus pour le champ du prénom.</span>";
  }
};
//Test nom
let nom=document.getElementById('last');
const logNom = document.getElementById('logNom');
nom.addEventListener('change', nomErreur);
function nomErreur(e) {
  nom.style.borderWidth="5px";
  if (e.target.value.length>1){
    nom.style.borderColor="green";
    logNom.style.display="none";
  }else{
    nom.style.borderColor="red";
    logNom.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer 2 caractères ou plus pour le champ du prénom.</span>";
  }
};

//Test mail
let email=document.getElementById('email');
const logEmail = document.getElementById('logEmail');
email.addEventListener('change', emailErreur);
function emailErreur(e) {
  email.style.borderWidth="5px";
  var expressionReguliereEmail	= /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/;
  if (expressionReguliereEmail.exec(e)!=null){
    email.style.borderColor="green";
    logEmail.style.display="none";
  }else{
    email.style.borderColor="red";
    logEmail.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer une adresse email valide.</span>";
  }
};

//Date de naissance
let birthDate=document.getElementById('birthdate');
const logDDN = document.getElementById('logDDN');
birthDate.addEventListener('change', dateErreur);

function dateErreur(e){
  birthDate.style.borderWidth="5px";
  var expressionReguliereDDN	= /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{2}$/;
  if (expressionReguliereDDN.exec(e)!=null){
    birthDate.style.borderColor="green";
    logDDN.style.display="none";
  }else{
    birthDate.style.borderColor="red";
    logDDN.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer votre date de naissance au format jj/mm/aaaa .</span>";
  }
};



//"Vous devez choisir une option."
//"Vous devez vérifier que vous acceptez les termes et conditions."
//(4)Pour le nombre de concours, une valeur numérique est saisie.
//(5) Un bouton radio est sélectionné.
//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
//Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
//Le formulaire doit être valide quand l'utilisateur clique sur "Submit"