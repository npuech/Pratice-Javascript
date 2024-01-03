let calculAdd = 4 + 5;

let calculMulti = 5 * 5;

if (calculAdd === 9) {
    console.log("Le résultat est bon !");
} else {
    console.log("Ce n'est pas le bon résulat.")
}

if (calculMulti >= 25) {
    console.log("C'est le bon résulat!")
} else {
    console.log("Ce n'est pas le bon résulat")
}

const age = 19;
const firstName = "Noa";

if (age === 19 && firstName === "Noa") {
    console.log("Tout est bon !")
} else {
    console.log("Y'a une erreur !")
}




function canDrive (age, pays) {
    if (
        (age >= 18 && pays === "FR") ||
        (age >= 16 && pays === "US")
    ) {
        return true
    } 
    return false
}

console.log(canDrive(19, "FR"));

//Fonction Info de la personne

function personInfo (age, nom, prénom, pays) {
    if (
        (age <= 18 && nom === "Puech") ||
        (prénom === "Noa" && pays === "FR")
    ) {
        return true
    } 
    return false
}

console.log(personInfo(16, "Puech", "Noa", "FR"));
//Affiche les infos de la personne : age, nom, prénom, pays.

function isPremier(n) {
    if (n < 2) {
        return false;
    }
    for(let i = n - 1; i > 1; i--) {
        if (n % i === 0) {
       return false; 
    }
    }
    return true;
}

console.log("0", isPremier(0));
console.log("1", isPremier(1));
console.log("2", isPremier(2));
console.log("3", isPremier(3));
console.log("11", isPremier(11));
console.log("12", isPremier(12));


const demo = function(nom) {
    return "Salut " + nom;
}

const resultat = demo("Noa");
console.log(resultat);

function test(nbr) {
    return nbr * 100;
}

const total = test(400);

console.log(total);


const notes = [12, 16, 18, 17, 8]
const person = {
    firstname: "Noa",
    lastname: "Puech"
};
const greeting = "Bonjour"
for (let letter in greeting) {
    console.log(letter)
}

console.log("Bravo ! Vous avez deviné")


console.log(Object.getPrototypeOf({a:1}));

//OBJETS

const ticket = {
    nomFilm: "Star Wars",
    prix: 10,
    numeroSalle: 3
}

let nom = "PUECH";

let texteAffichage = "Bonjour " + nom + ", Votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle + ".";

console.log(texteAffichage);

const infoPermis = {
    age: 17,
    nom: "PUECH ",
    prenom: " Noa",
    nationalite: "Français",
    datePermis: "05/02/2024"
}

const texteBorne = "Bonjour M." + infoPermis.nom + infoPermis.prenom + ", vous avez " + infoPermis.age + " ans, vous etes " + infoPermis.nationalite + " et votre permis est valable jusqu'au " + infoPermis.datePermis + ".";

console.log(texteBorne);

const infoProduit = {
    vetement: "T-shirt",
    couleur: "noir",
    marque: "Modern Sport",
    taille: "L",
    prix: 14.99
};

const textProduit = "Le " + infoProduit.vetement + " de couleur " + infoProduit.couleur + " de la marque " + infoProduit.marque + " de taille " + infoProduit.taille + " est disponible au prix de " + infoProduit.prix + "€.";

console.log(textProduit);

//TABLEAUX

let mesFilms = ["Avengers", "Star Wars", "Harry Potter"]

mesFilms.push("Spiderman");

const maCollectionFilms = mesFilms.length

console.log(mesFilms);
console.log(maCollectionFilms);


/* A RETENIR : 
.pop() : supprime le dernier élément d'un  tableau.
.push() : ajoute un élément à la fin du tableau.
.length : permet de connaitre la taille du tableau.

Le copie par valeur est utilisée pour les types primitifs.
Le copie par référence est utilisée pour les objets et les tableaux.*/

let playlist = ["Sweet O Child O Mine", "Paradise City", "Rocket Queen"]

playlist.push("Welcome to the Jungle", "November Rain")
playlist.pop()

const totalMorceaux = playlist.length

console.log(playlist);
console.log(totalMorceaux);


let mesAccessoires = ["Casque", "Souris", "Clavier", "Écran", "Micro"]

mesAccessoires.push("Tapis de souris", "Webcam")
mesAccessoires.pop()

const totalAccesoires = mesAccessoires.length

console.log(mesAccessoires);
console.log("Le total de mes accesoires sont de " + totalAccesoires + ".");

//CONDITIONS
/* Une condition est une expression qui peut etre évaluée comme vraie ou fausse.*/

let motTapeOk = false;

if (motTapeOk === true) {
    console.log("Le mot est bon !")
} else {
    console.log("Le mot est faux !")
}

/* Prompt permet de demander à l'utilisateur de saisir une valeur.*/
/* === : égalité stricte, vérifie si les deux valeurs sont identiques.*/

/* EXERCICE 1 */
/* const motApplication = "Clavier";

let motUtilisateur = prompt("Entrez un mot : " + motApplication);

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur !")
} */

/* EXERCICE 2*/
/* switch : permet d'évaluer une expression et d'exécuter une instruction correspondante.
/*case : permet de définir une valeur à comparer avec l'expression.*/
/* break : permet de sortir du block switch.*/

/* switch (motUtilisateur) {
    case motApplication :
        console.log("Bravo !")
        break;
    case "Souris" : 
    console.log("Vous avez fait une erreur !")
    break;
    case "Casque" : 
    console.log("Non !")
    break;
    default : 
    console.log("Erreur !")
} */

//BOUCLES 

/* Une boucle permet de répéter une ou plusieurs instructions. */
/* On commence à partir de 0.*/
/* Une boucle for est composée de 3 parties : initialisation, conditions et incrémentation.*/
/* i++ : incrémente la valeur de i de 1.*/
/* i < 5 : la boucle s'arrete quand i est supérieur à 5.*/

/*for (let i = 0; i < 3; i++) {
    console.log(i);
} */

/* Une boucle while est composée de 2 parties : conditions et incrémentation.*/

/*let i = 0;

while (i < 3) {
    console.log(i);
    i++;
} */

//FONCTIONS
/* Une fonction est un bloc de code qui peut être appelé plusieurs fois. */
/* Une fonction peut avoir des paramètres. */
/* Une fonction peut retourner une valeur. */
/* Pour déclarer une fonction, on utilise le mot clé function. */

function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}

function choisirPhrasesOuMots() {
    //Demande à l'utilisateur s'il veut jouer avec des mots ou des phrases
    let choixUtilisateur = prompt("Voulez-vous jouer avec des mots ou des phrases ?")
//Tant que l'utilisateur n'a pas entré "mots" ou "phrases", on lui redemande
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    choixUtilisateur = prompt("Voulez-vous jouer avec des mots ou des phrases ?")
}
//On retourne le choix de l'utilisateur
return choixUtilisateur;
}

//Fonction qui va lancer la boucle de jeu
function lancerBoucleDeJeu(listePropositions) {
    //Initialise le score du joueur
    let score = 0;
    //Boucle pour les mots
    for (let i = 0; i < listePropositions.length; i++) {
        //Demande à l'utilisateur de saisir le mot
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
        if (motUtilisateur === listePropositions[i]) {
            score++;
            console.log("Bravo")
        }
    }
    //Affiche le score du joueur
    return score;
}

//Fonction qui va lancer le jeu
function lancerJeu() {
    let choix = choisirPhrasesOuMots();
    let score = 0;
    let nbMotsProposes = 0;
    //Si l'utilisateur a choisi "mots"
    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots);
        nbMotsProposes = listeMots.length;
        //Si l'utilisateur a choisi "phrases"
    } else if (choix === "phrases") {
        score = lancerBoucleDeJeu(listePhrases);
        nbMotsProposes = listePhrases.length;
    }
    //Affiche le score du joueur
    afficherResultat(score, nbMotsProposes);
}

lancerJeu();