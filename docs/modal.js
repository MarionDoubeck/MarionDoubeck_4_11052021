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
var erreurChamp1=1;  //les variables erreursChamp sont à 1 s'il y a une erreur dans ce champ, 0 sinon
let prenom=document.getElementById('first'); //ce que l'utilisateur a saisi dans ce champ
const logPrenom = document.getElementById('logPrenom'); //champ de message d'erreur à destination de l'utilisateur
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
var erreurChamp2=1; //les variables erreursChamp sont à 1 s'il y a une erreur dans ce champ, 0 sinon
let nom=document.getElementById('last'); //ce que l'utilisateur a saisi dans ce champ
const logNom = document.getElementById('logNom'); //champ de message d'erreur à destination de l'utilisateur
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
var erreurChamp3=1; //les variables erreursChamp sont à 1 s'il y a une erreur dans ce champ, 0 sinon
let email=document.getElementById('email'); //ce que l'utilisateur a saisi dans ce champ
const logEmail = document.getElementById('logEmail'); //champ de message d'erreur à destination de l'utilisateur
email.addEventListener('change', emailErreur);

function emailErreur(e) {
  email.style.borderWidth="5px";
  var expressionReguliereEmail	= /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/; //format d'une adresse mail
  if (expressionReguliereEmail.exec(e.target.value)!=null){
    email.style.borderColor="green";
    logEmail.style.display="none";
    erreurChamp3=0; //on valide le test dès que le champs respecte le format d'une adresse mail
  }else{
    email.style.borderColor="red";
    erreurChamp3=1;
    logEmail.style.display="block";
    logEmail.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer une adresse email valide.</span>";
  }
};

//Test Date de naissance
var erreurChamp4=1; //les variables erreursChamp sont à 1 s'il y a une erreur dans ce champ, 0 sinon
let birthDate=document.getElementById('birthdate'); //ce que l'utilisateur a saisi dans ce champ
const logDDN = document.getElementById('logDDN'); //champ de message d'erreur à destination de l'utilisateur
birthDate.addEventListener('focus', dateErreur);
birthDate.addEventListener('change', dateErreur);

function dateErreur(e){
  birthDate.style.borderWidth="5px";
  if (e.target.value!=""){
    birthDate.style.borderColor="green";
    logDDN.style.display="none";
    erreurChamp4=0;  //on valide le test dès que le champs n'est pas vide
    }else{
      birthDate.style.borderColor="red";
      erreurChamp4=1;
      logDDN.style.display="block";
      logDDN.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer votre date de naissance au format jj/mm/aaaa .</span>";
    }
};
//Test Nombre tournois
var erreurChamp5=1; //les variables erreursChamp sont à 1 s'il y a une erreur dans ce champ, 0 sinon
let quantity=document.getElementById('quantity'); //ce que l'utilisateur a saisi dans ce champ
const logQuantity = document.getElementById('logQuantity'); //champ de message d'erreur à destination de l'utilisateur
quantity.addEventListener('focus', quantityErreur);
quantity.addEventListener('change', quantityErreur);
function quantityErreur(e){
  quantity.style.borderWidth="5px";
  if (e.target.value!=""){ 
    quantity.style.borderColor="green";
    logQuantity.style.display="none";
    erreurChamp5=0;   //on valide le test dès que le champs n'est pas vide
  }else{
    quantity.style.borderColor="red";
    erreurChamp5=1;
    logQuantity.style.display="block";
    logQuantity.innerHTML="<span style='font-size:14px;color:red'> Veuillez entrer un nombre.</span>";
  }
};


  
//validation
document.querySelectorAll(".btn-submit").forEach((btn) => btn.addEventListener("click", compter));

function compter(e){ //cette fonction se lance quand l'utilisateur clique sur le bouton de validation
  //cette fonction finit les tests des champs : ville d'inscription et conditions d'utilisation coché
  //puis elle compte le nombre de champs pas ou mal renseignés
  //enfin, elle appelle la fonction de validation "launchValidate"

  //test villes
  var nbVille=0;
  for ( let pas=1; pas<7;pas++ ){
    var locString="location"+pas;
    if (document.getElementById(locString).checked){
      nbVille++;
    }
  };
  if (nbVille==0){
    erreurChamp6=1; //les variables erreursChamp sont à 1 s'il y a une erreur dans ce champ, 0 sinon
    const logVille=document.getElementById('logVille');//champ de message d'erreur à destination de l'utilisateur
    logVille.innerHTML="<span style='font-size:14px;color:red'> Veuillez vous inscrire quelquepart.</span>";
  }else{
    erreurChamp6=0;
    logVille.style.display="none";
  }
  //test conditions d'utilisation
  let checkConditions=document.getElementById("checkbox1");
  var erreurChamp7=1; //les variables erreursChamp sont à 1 s'il y a une erreur dans ce champ, 0 sinon
  if (checkConditions.checked==true){
    erreurChamp7=0;
    document.getElementById('logConditions').style.display="none";
  }else{
    erreurChamp7=1;
    const logConditions=document.getElementById('logConditions');//champ de message d'erreur à destination de l'utilisateur
    logConditions.style.display="block";
    logConditions.innerHTML="<span style='font-size:14px;color:red'> Veuillez accepter les conditions d'utilisation.</span>";
  };
  //compter le nombre d'erreurs grâce aux variables "erreurChamp"
  var nbErr=erreurChamp1+erreurChamp2+erreurChamp3+erreurChamp4+erreurChamp5+erreurChamp6+erreurChamp7;
  if (nbErr==0){
    launchValidate(e)}
};
  
function launchValidate() {
  var heightModal=document.querySelector(".modal-body").offsetHeight; //on mesure la hauteur du formulaire afin de garder la même taille pour la fenêtre du message de validation
  document.querySelector(".modal-body").style.display = "none"; //on fait disparaitre le bloc formulaire
  document.querySelector(".modal-body2").style.display = "block"; //on fait apparaître le bloc du message de validation
  let HM=heightModal.toString();
  document.querySelector(".modal-body2").style.height=HM+"px";
}


//fermeture
document.querySelectorAll(".btn-close").forEach((btn) => btn.addEventListener("click", closeModal));
document.querySelectorAll(".close").forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal(){
  document.querySelector(".bground").style.display = "none";
}
