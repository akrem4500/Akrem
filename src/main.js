class Main {
    // Méthode pour vérifier si un nombre est pair
  static estPair(n) {
    return n % 2 === 0;
  }
// Méthode pour vérifier si un nombre est premier
static estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

module.exports = Main;