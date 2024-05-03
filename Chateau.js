class Chateau {
    constructor() {
        this.ressources = 3;
        this.fileAttente = [];
        this.guerriers = new Map();
        this.initialiserGuerriers();

        this.besoinRessources = {
            Nain: 1,
            ChefNain: 3,
            Elfe: 2,
            ChefElfe: 4
        };
    }

    //Initialiser l'armé
    initialiserGuerriers() {
        this.guerriers.set(new Nain(10, 100), 0);
        this.guerriers.set(new Nain(10, 100), 0);
        this.guerriers.set(new Nain(10, 100), 0);
        this.guerriers.set(new Nain(10, 100), 0);
        this.guerriers.set(new ChefNain(10, 100), 0);
        this.guerriers.set(new Elfe(20, 100), 0);
        this.guerriers.set(new Elfe(20, 100), 0);
        this.guerriers.set(new Elfe(20, 100), 0);
        this.guerriers.set(new Elfe(20, 100), 0);
        this.guerriers.set(new ChefElfe(40, 100), 0);
    }

    ajouterGuerrierAFileAttente(LsiteGuerrier) {
        for (let i = 0; i < LsiteGuerrier.length; i++) {
            if (LsiteGuerrier[i]) {
                this.fileAttente.push(LsiteGuerrier[i]);
            } else {
                console.log("Type de guerrier non reconnu.");
            }
            
        }
       
    }
    

    entrainer() {
        for (const guerrier of this.fileAttente) {
            const typeGuerrier = guerrier.constructor.name;
            const coutRessources = this.besoinRessources[typeGuerrier];
            if (coutRessources && coutRessources <= this.ressources) {
                this.ressources -= coutRessources;
                this.guerriers.get(typeGuerrier).push(guerrier);
            } else {
                console.log(`Ressources insuffisantes pour entraîner ${typeGuerrier}`);
            }
        }
        this.fileAttente = []; 
    }

}