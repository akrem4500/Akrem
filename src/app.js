const Main = require('./main');

// Exemple d'utilisation des méthodes de la classe Main

// Tableau d'entiers
const tableau = [1, 2, 3, 4, 5];

// Calculer la somme du tableau
const somme = Main.sommeTableau(tableau);
console.log(`Somme du tableau: ${somme}`);

// Calculer la moyenne du tableau
const moyenne = Main.moyenneTableau(tableau);
console.log(`Moyenne du tableau: ${moyenne}`);

// Calculer la factorielle d'un nombre
const nombre = 5;
const fact = Main.factorielle(nombre);
console.log(`Factorielle de ${nombre}: ${fact}`);

// Vérifier si un nombre est pair
const nombrePair = 4;
const estPair = Main.estPair(nombrePair);
console.log(`${nombrePair} est pair: ${estPair}`);

const nombreImpair = 7;
const estImpair = Main.estPair(nombreImpair);
console.log(`${nombreImpair} est pair: ${estImpair}`);

// Vérifier si un nombre est premier
const nombrePremier = 7;
const estPremier = Main.estPremier(nombrePremier);
console.log(`${nombrePremier} est premier: ${estPremier}`);

const nombreNonPremier = 4;
const estNonPremier = Main.estPremier(nombreNonPremier);
console.log(`${nombreNonPremier} est premier: ${estNonPremier}`);
