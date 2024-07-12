class Main {
    // Méthode pour calculer la somme d'un tableau d'entiers
    static sommeTableau(tab) {
      return tab.reduce((acc, val) => acc + val, 0);
    }

     // Méthode pour calculer la moyenne d'un tableau d'entiers
  static moyenneTableau(tab) {
    if (tab.length === 0) return 0;
    return this.sommeTableau(tab) / tab.length;
  }
// Méthode pour calculer la factorielle d'un nombre
static factorielle(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = Main;