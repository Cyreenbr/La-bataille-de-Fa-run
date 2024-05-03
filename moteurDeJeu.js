// Constantes définissant les caractéristiques de base des guerriers
const FORCE_BASE = 10;
const PV_BASE = 100;

//Guerrier
class Guerrier {

    constructor(force, pv ) {
        this.force = force;
        this.pv = pv;
    }

    // Méthode pour calculer les dégâts
    calculerDegats() {
        let degats = 0;

        //Lancement de 3 dés 
        for (let i = 0; i < this.force; i++) {
            degats += Math.floor(Math.random() * 3) + 1; // Lancer un dé à 3 faces
        }

        return degats;
    }

}

//Nain 
class Nain extends Guerrier {
    constructor() {
        super(FORCE_BASE, PV_BASE ); 
    }

    calculerDegats() {
        return super.calculerDegats() / 2; 
    }
}

//Elfe
class Elfe extends Guerrier {
    constructor() {
        super(FORCE_BASE * 2, PV_BASE );
    }
}

//ChefNain
class ChefNain extends Nain {
    constructor() {
        super(FORCE_BASE, PV_BASE ); 
    }

    calculerDegats() {
        return super.calculerDegats() / 2; 
    }
}

class ChefElfe extends Elfe {
    constructor() {
        super(FORCE_BASE * 4 , PV_BASE ); 
    }
}

