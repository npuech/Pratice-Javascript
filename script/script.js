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