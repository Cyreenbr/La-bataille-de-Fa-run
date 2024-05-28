  /*GetPositionEquipe(){
        LBleu=[];
        LRouge=[];
        for (let i = 0; i < this.carreaux.length  ; i++) {
            console.log('Current index:', i);
            console.log('Contents of carreaux:', this.carreaux);
            // Check if there are blue warriors in the current position
            if ( ( Array.isArray(this.carreaux[i][0]) && this.carreaux[i][0][0]=="bleu" ) || ( Array.isArray(this.carreaux[i][1]) && this.carreaux[i][1][0]=="bleu" )) {
                if(i==4){

                }else{
                    LBleu.push(i);
                }
             }
            if (( Array.isArray(this.carreaux[i][0]) && this.carreaux[i][0][0]=="rouge" ) || ( Array.isArray(this.carreaux[i][1]) && this.carreaux[i][1][0]=="rouge" )) {
                if(i==0){

                }else{
                    LRouge.push(i);
                }
             }
        }
        console.log('++++++++++++++++++++++++++++++++++++++++++++bleu',LBleu);
        console.log('++++++++++++++++++++++++++++++++++++++++++++rouge',LRouge);
    }

    MouvementGuerrier(positionInitial,pas,equipe,couleurAdv){
        if ( Array.isArray(this.carreaux[positionInitial + pas])) {
          if ( (Array.isArray(this.carreaux[positionInitial + pas][0]) &&  this.carreaux[positionInitial + pas][0][0] ==couleurAdv) || (Array.isArray(this.carreaux[positionInitial + pas][0]) &&  this.carreaux[positionInitial + pas][0][0] ==couleurAdv)) {
            combat = true;
            position_Combat = positionInitial + pas;
          }
          if ( (Array.isArray(this.carreaux[positionInitial + pas][0]) && this.carreaux[positionInitial + pas][0][0] == this.carreaux[positionInitial ][0][0]) || (Array.isArray(this.carreaux[positionInitial + pas][0]) &&  this.carreaux[positionInitial + pas][0][0] ==this.carreaux[positionInitial ][0][0])) {
            if ( Array.isArray(this.carreaux[positionInitial ][0]) ){
                equipe.push(this.carreaux[positionInitial][0].slice(1)[0]);
                console.log('mon equiiiipeeeeeeeeee <3<3<3<3<3',this.carreaux[positionInitial][0].slice(1)[0]);

            }
            if ( Array.isArray(this.carreaux[positionInitial][1]) ){
                equipe.push(this.carreaux[positionInitial][1].slice(1)[0]);
                console.log('mon equiiiipeeeeeeeeee <3<3<3<3<3',this.carreaux[positionInitial][1]);

            }

          }

        }
        // Move the blue warrior to the next position
        if( Array.isArray(this.carreaux[positionInitial + pas])){
            this.carreaux[positionInitial + pas]= this.carreaux[positionInitial + pas].concat(this.carreaux[positionInitial]);  
           // console.log('mon equiiiipeeeeeeeeee <3<3<3<3<3', this.carreaux[positionInitial + pas],positionInitial + pas);
        }else{
            this.carreaux[positionInitial + pas]= this.carreaux[positionInitial];
           // console.log('mon equiiiipeeeeeeeeee <3<3<3<3<3', this.carreaux[positionInitial + pas]);
  

        }
        this.carreaux[positionInitial] = [];
        this.afficherDepGuerriers(positionInitial + pas , -pas);

    }

    
    deplacerGuerriers(equipeB,equipeR){
        try {
            console.log('Starting to move warriors...');
            
            while (!combat ) {
                console.log('Checking for combat...');
                this.GetPositionEquipe();     
                
            //dep bleu
         
            for (let j = 0; j < LBleu.length; j++) { 
                    this.MouvementGuerrier(LBleu[j],1,equipeB,"rouge");
            }
         

//dep rouge
      for (let j = 0; j < LRouge.length; j++) {
        if(!combat){
            this.MouvementGuerrier(LRouge[j],(-1),equipeR,"bleu"); 
        }
      }  
                
    }       
     combat = false ;

        } catch (error) {
            console.error('Error occurred while moving warriors:', error);
        }
    }
    */



    /*GetPositionEquipe(){
        LBleu=[];
        LRouge=[];
        for (let i = 0; i < this.carreaux.length  ; i++) {
            console.log('Current index:', i);
            console.log('Contents of carreaux:', this.carreaux);
            // Check if there are blue warriors in the current position
            if ( ( Array.isArray(this.carreaux[i][0]) && this.carreaux[i][0][0]=="bleu" ) || ( Array.isArray(this.carreaux[i][1]) && this.carreaux[i][1][0]=="bleu" )) {
                if(i==4){

                }else{
                    LBleu.push(i);
                }
             }
            if (( Array.isArray(this.carreaux[i][0]) && this.carreaux[i][0][0]=="rouge" ) || ( Array.isArray(this.carreaux[i][1]) && this.carreaux[i][1][0]=="rouge" )) {
                if(i==0){

                }else{
                    LRouge.push(i);
                }
             }
        }
        console.log('++++++++++++++++++++++++++++++++++++++++++++bleu',LBleu);
        console.log('++++++++++++++++++++++++++++++++++++++++++++rouge',LRouge);
    }

    MouvementGuerrier(positionInitial,pas,equipe,couleur,couleurAdv){
        if ( Array.isArray(this.carreaux[positionInitial + pas])) {
         
          for (let i = 0; i < this.carreaux[positionInitial + pas].length; i++) {
            if ( Array.isArray(this.carreaux[positionInitial + pas ][i]) && this.carreaux[positionInitial + pas ][i][0] === couleurAdv ){
                combat = true;
                //equipe.push(this.carreaux[positionInitial][i].slice(1)[0]);
                position_Combat = positionInitial + pas;
            }
            if (Array.isArray(this.carreaux[positionInitial + pas ][i]) && this.carreaux[positionInitial + pas ][i][0] === couleur) {
                this.carreaux[positionInitial + pas ][i].push(this.carreaux[positionInitial][i].slice(1)[0]);
            }
            
          }

        }
        // Move the blue warrior to the next position
        if( Array.isArray(this.carreaux[positionInitial + pas]) ){
            this.carreaux[positionInitial + pas]= this.carreaux[positionInitial + pas].concat(this.carreaux[positionInitial]);  
           // console.log('mon equiiiipeeeeeeeeee <3<3<3<3<3', this.carreaux[positionInitial + pas],positionInitial + pas);
        }else{
            this.carreaux[positionInitial + pas]= this.carreaux[positionInitial];
           // console.log('mon equiiiipeeeeeeeeee <3<3<3<3<3', this.carreaux[positionInitial + pas]);
  

        }
        this.carreaux[positionInitial] = [];
        this.afficherDepGuerriers(positionInitial + pas , -pas);

    }

    
    deplacerGuerriers(equipeB, equipeR) {
        try {
            console.log('Starting to move warriors...');
            let warriorsMoved = false;
            do {
                warriorsMoved = false;
                console.log('Checking for combat...');
                this.GetPositionEquipe();
    
                // Move blue warriors
                for (let j = 0; j < LBleu.length; j++) {
                    this.MouvementGuerrier(LBleu[j], 1, equipeB, "bleu", "rouge");
                    warriorsMoved = true;
                }
    
                // Move red warriors
                for (let j = 0; j < LRouge.length; j++) {
                    this.MouvementGuerrier(LRouge[j], -1, equipeR, "rouge", "bleu");
                    warriorsMoved = true;
                }
            } while (!combat && warriorsMoved);
            combat = false ;
        } catch (error) {
            console.error('Error occurred while moving warriors:', error);
        }
    }
    */
