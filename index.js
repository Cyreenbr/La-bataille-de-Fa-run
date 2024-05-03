const guerrierNormal = new Guerrier(10, 100);
const nain = new Nain();
const elfe = new Elfe();
const chefNain = new ChefNain();
const chefElfe = new ChefElfe();

const chateau = new Chateau();
        //pour test
chateau.fileAttente = [{elfe , entrainement : 2} ,{elfe , entrainement: 2},{elfe ,entrainement: 2}]

// Exemple d'utilisation : calculer les dégâts infligés par un guerrier

console.log('Liste de guerriers' , chateau.guerriersNovices) ;
//chateau.ajouterGuerrierAFileAttente(selectedWarriors);
console.log('file dattente' , chateau.fileAttente);
console.log('file dattente avant entrainement' , chateau.fileAttente);
chateau.entrainer();
console.log('file dattente' , chateau.fileAttente);
console.log('guerrier novices' , chateau.guerriersNovices);
console.log('ressources' , chateau.ressources);