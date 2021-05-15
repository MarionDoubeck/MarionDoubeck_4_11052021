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

//TESTS DU QUESTIONNAIRE
//Test prénom
var erreurChamp1=1;
let prenom=document.getElementById('first');
const logPrenom = document.getElementById('logPrenom');
prenom.addEventListener('change', prenomErreur);
function prenomErreur(e) {
  prenom.style.borderWidth="5px";
  if (e.target.value.length>1){
    prenom.style.borderColor="green";
    logPrenom.style.display="none";
    erreurChamp1=0;
  }else{
    prenom.style.borderColor="red";
    erreurChamp1=1;
    logPrenom.style.display="block";
    logPrenom.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer 2 caractères ou plus pour le champ du prénom.</span>";
  }
};
//Test nom
var erreurChamp2=1;
let nom=document.getElementById('last');
const logNom = document.getElementById('logNom');
nom.addEventListener('change', nomErreur);
function nomErreur(e) {
  nom.style.borderWidth="5px";
  if (e.target.value.length>1){
    nom.style.borderColor="green";
    logNom.style.display="none";
    erreurChamp2=0;
  }else{
    nom.style.borderColor="red";
    erreurChamp2=1;
    logNom.style.display="block";
    logNom.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer 2 caractères ou plus pour le champ du prénom.</span>";
  }
};


//Test mail
var erreurChamp3=1;
let email=document.getElementById('email');
const logEmail = document.getElementById('logEmail');
email.addEventListener('change', emailErreur);
function emailErreur(e) {
  email.style.borderWidth="5px";
  var expressionReguliereEmail	= /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/;
  if (expressionReguliereEmail.exec(e.target.value)!=null){
    email.style.borderColor="green";
    logEmail.style.display="none";
    erreurChamp3=0;
  }else{
    email.style.borderColor="red";
    erreurChamp3=1;
    logEmail.style.display="block";
    logEmail.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer une adresse email valide.</span>";
  }
};

//Test Date de naissance
var erreurChamp4=1;
let birthDate=document.getElementById('birthdate');
const logDDN = document.getElementById('logDDN');
birthDate.addEventListener('focus', dateErreur);
birthDate.addEventListener('change', dateErreur);

function dateErreur(e){
  birthDate.style.borderWidth="5px";
  if (e.target.value!="" && e.target.value<"2021-01-01" && e.target.value>"1900-01-01"){
    birthDate.style.borderColor="green";
    logDDN.style.display="none";
    erreurChamp4=0;
    }else{
      birthDate.style.borderColor="red";
      erreurChamp4=1;
      logDDN.style.display="block";
      logDDN.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer votre date de naissance au format jj/mm/aaaa .</span>";
    }
};
//Test Nombre tournois
var erreurChamp5=1;
let quantity=document.getElementById('quantity');
const logQuantity = document.getElementById('logQuantity');
quantity.addEventListener('focus', quantityErreur);
quantity.addEventListener('change', quantityErreur);
function quantityErreur(e){
  quantity.style.borderWidth="5px";
  if (e.target.value!=""){
    quantity.style.borderColor="green";
    logQuantity.style.display="none";
    erreurChamp5=0;
  }else{
    quantity.style.borderColor="red";
    erreurChamp5=1;
    logQuantity.style.display="block";
    logQuantity.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer un nombre.</span>";
  }
};


  
//validation
document.querySelectorAll(".btn-submit").forEach((btn) => btn.addEventListener("click", compter));

function compter(e){
  //test villes
  var nbVille=0;
  for ( let pas=1; pas<7;pas++ ){
    var locString="location"+pas;
    if (document.getElementById(locString).checked){
      nbVille++;
    }
  };
  if (nbVille==0){
    erreurChamp6=1;
    document.getElementById('logVille').innerHTML="<span style='font-size:14px;color:red'> Veuillez vous inscrire quelquepart.</span>";
  }else{
    erreurChamp6=0;
    document.getElementById('logVille').style.display="none";
  }
  //test conditions d'utilisation

  //compter le nombre d'erreurs
  var nbErr=erreurChamp1+erreurChamp2+erreurChamp3+erreurChamp4+erreurChamp5+erreurChamp6;
  const logNombreErreurs = document.getElementById('logNombreErreurs');
  nbChampsMalRenseignes=nbErr.toString().fontcolor("red");
  logNombreErreurs.innerHTML=nbChampsMalRenseignes+"<span style='font-size:14px;color:red'> champs sont mal renseignés</span>";
  if (nbErr==0){launchValidate(e)}
};

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

//"Vous devez vérifier que vous acceptez les termes et conditions."