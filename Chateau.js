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
    

    //Entrainement
    entrainerGuerriers() {

        console.log(`Tour : Château possède ${this.ressources} ressources`);

        let i = 0 ;
        while (this.ressources > 0 && this.fileAttente[i] != null ){
            do {
                this.guerriers[this.fileAttente[i]] ++ ; 
                this.ressources -- ;
                i++ ;
                
            } while (this.fileAttente[i].bR == this.guerriers[this.fileAttente[i]]);

        }
        
        // Réinitialisation de la file d'attente
        this.fileAttente = [];


    }

}