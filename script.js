//Exercice 1: déclarer des variables de différents types (string, number, boolean) et d'afficher leur contenu dans la console.

// Déclaration de variables
let nom = "Quentin"; // type string
let age = 29; // type number
let estUnHomme = true; // type boolean

// Affichage du contenu des variables dans la console
console.log("Nom :", nom);
console.log("Âge :", age);
console.log("est un homme:", estUnHomme);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 2 : Écrire une fonction qui convertit des degrés Celsius en Fahrenheit.
//"Pour convertir en degrés Celsius une température donnée en degrés Fahrenheit, il convient de soustraire 32 et de diviser le nombre ainsi obtenu par 1,8 (9/5 = 1,8)."
// Fonction de conversion Celsius vers Fahrenheit
function convertirCelsiusEnFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// Affichage d'un exemple dans la console
let celsius = 20;
console.log(
  celsius +
    "°C en Fahrenheit est : " +
    convertirCelsiusEnFahrenheit(celsius) +
    "°F"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 3 : Écrire une condition pour vérifier si un nombre est pair ou impair, et afficher un message correspondant.

// En utilisant le modulo :

// Fonction pour vérifier si un nombre est pair ou impair
function verifierNombrePairOuImpair(nombre) {
  if (nombre % 2 === 0) {
    console.log(nombre + " est un nombre pair.");
  } else {
    console.log(nombre + " est un nombre impair.");
  }
}

// Affichage d'un exemple dans la console
let nombre = 1;
verifierNombrePairOuImpair(nombre);

// Si tu veut vérifier un nombre pair
// let nombre = 2;
// verifierNombrePairOuImpair(nombre);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 4: Utiliser une boucle for pour afficher les nombres de 1 à 10, puis inverser la boucle pour les afficher de 10 à 1.

// Afficher les nombres de 1 à 10
function afficher1a10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Afficher les nombres de 10 à 1
function afficher10a1() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

afficher1a10();
afficher10a1();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 5 : créer une fonction simple qui prend deux nombres et renvoie leur somme.

// Fonction pour additioner deux nombres
function additionner(nombre1, nombre2) {
  return nombre1 + nombre2;
}

// Affichage d'un exemple dans la console, spoiler ça fait 2
let resultat = additionner(1, 1);
console.log("La somme est : " + resultat);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 6 : Créer une fonction pour vérifier si une chaîne de caractères contient un certain mot.

function contientMot(chaine, mot) {
  return chaine.includes(mot);
}

// Exemple d'utilisation
let texte = "Comment est votre blanquette ?";
let motRecherche = "blanquette";

if (contientMot(texte, motRecherche)) {
  console.log("Le mot '" + motRecherche + "' est présent dans la chaîne.");
} else {
  console.log(
    "Le mot '" + motRecherche + "' n'est pas présent dans la chaîne."
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 7 : Créer un tableau de prénoms et afficher chacun avec une boucle.

// Tableau de prénoms
const prenoms = ["Yassine", "Jordan"];

// Afficher chaque prénom avec une boucle
prenoms.forEach((prenom) => {
  console.log(prenom);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 8 : créer un objet simple représentant une personne (nom, âge, ville) et d'accéder aux propriétés. (On affiche en console)

const personne = {
  nom: "Quentin",
  age: 29,
  ville: "Toulouse",
};

// Accéder aux propriétés et les afficher individuellement
console.log("Nom :", personne.nom);
console.log("Âge :", personne.age);
console.log("Ville :", personne.ville);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 9 : ajouter un élément de texte dans une page HTML via JavaScript.
// Fonction pour ajouter un élément de texte dans la page
function ajouterTexte() {
  // Sélectionner l'élément paragraphe par son ID
  const resultat = document.getElementById("texte");

  // Ajouter du texte à l'élément
  resultat.textContent = "Old el paso ? No no jose (pero en JS)";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 10 : Créer un bouton via JS, on l’affiche dans la page et au click cela déclenche une alerte

//Pas réussi à créer le bouton via JS
function ajouterAlerte() {
  alert("Vous avez cliqué sur le bouton !");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 11 : Contactez une api qui génère des chuck Norris Facts , et  on affiche dans blague dans la page
//api.chucknorris.io/jokes/random
https: function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("joke").textContent = data.value;
    })
    .catch((error) => {
      document.getElementById("joke").textContent =
        "Désolé, une erreur est survenue.";
      console.error("Erreur:", error);
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 12 : dans la page web mettre en place un système de Dark Chartreuse Mode on click sur un bouton cela change le look de la page ambiance chartreuse
// Fonction pour activer/désactiver le mode Chartreuse
function seCramerLaRetine(color) {
  document.body.style.background = color;
}

//J'aurais pu faire en sorte de quitter le thème et retourner à la couleur d'origine en ajoutant un boolean en fonction du true ou
//false on verrait si le bouton est activé ou pas et donc desactivé le tème mais j'ai pas eu le temps
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
