const guerrierNormal = new Guerrier(10, 100);
const nain = new Nain();
const elfe = new Elfe();
const chefNain = new ChefNain();
const chefElfe = new ChefElfe();

// Exemple d'utilisation : calculer les dégâts infligés par un guerrier
console.log(guerrierNormal.calculerDegats()); // Affiche les dégâts infligés par un guerrier normal
console.log('nain dégats ' , nain.calculerDegats()); // Affiche les dégâts infligés par un Nain
console.log(nain); // Affiche les dégâts infligés par un Nain
console.log(elfe.calculerDegats()); // Affiche les dégâts infligés par un Elfe
console.log(chefNain.calculerDegats()); // Affiche les dégâts infligés par un Chef Nain
console.log(chefNain); // Affiche les dégâts infligés par un Chef Nain
console.log(chefElfe.calculerDegats()); // Affiche les dégâts infligés par un Chef Elfe


const chateau = new Chateau();

// Exemple d'utilisation pour plusieurs tours
console.log(chateau.guerriers) ;
const monChateau = new Chateau();
monChateau.ajouterGuerrierAFileAttente([nain , elfe, chefElfe]);
console.log(monChateau.fileAttente);
monChateau.entrainer();
console.log(monChateau.fileAttente);
console.log(monChateau.ressources);
console.log(monChateau.guerriers);

