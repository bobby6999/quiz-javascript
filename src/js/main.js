// Quiz: Veuillez répondre aux questions ci-dessous. (50 min) (+15 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. VOus avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE:
//des nombres, des chaînes de caractères, ou d’autres types de valeurs.

// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.

const firstName = "Maria";

// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
var birthday = 21;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: input
// - Classe(s): card-input
// - Attribut(s): type="text", name="password" placeholder="Créer votre mot de passe" id="password-input" class="card-inpu"

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: class : pour appliquer des styles, aussi pour regrouper plusieurs éléments et selectionner des éléments par leur classe
//par exemple getElementsByClassName
// pour ID : identifier un élément unique , par exemple getElementById

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE:  pour rechercher dans html trouver un element qu'on veut après

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".

// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
let cardContent = document.querySelector(".card-content");
// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété .classList pour ajouter (.add("...")) la class ".highlight" à l'élément HTML.
cardContent.classList.add("highlight");
// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder" (.getAttribute("...")) de l'élément HTML <input> (ligne 17 du code HTML).
let placeholderValue = passwordInput.getAttribute("placeholder");

// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE:
// par exemple addEventListener est une methode qui vient s’ajouter sur element html (quon veut écouter ou reagir)
// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
cardButton.addEventListener("click", function() {
    console.log("Le bouton a été cliqué !");}

// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
//////// let cardButton = document.querySelector("#card-btn");
// 11.2 : Utilisez la méthode .addEventListener("...", function() {...}) sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
cardButton.addEventListener("click", function() { console.log("Le bouton a été cliqué !"););}
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class ".hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
