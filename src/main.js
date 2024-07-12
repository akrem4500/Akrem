class Main {
    // Méthode pour calculer la somme d'un tableau d'entiers
    static sommeTableau(tab) {
      return tab.reduce((acc, val) => acc + val, 0);
    }
}