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

}