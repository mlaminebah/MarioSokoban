import {Niveau} from './Niveau.js'

var LectureNiveaux = class {
    static nniveau = 0;//un compteur static pour la lecture des niveaux
    constructor (niveaux) {
        this.lesNiveaux = this.initNiveaux (niveaux);
    }
    //initialise les niveaux
    initNiveaux =  (niveaux) => {
        let lesNiveaux = [];
        for (let n in niveaux) {
            lesNiveaux [n - 1] = this.initNiveau (niveaux[n],n);
        }
        return lesNiveaux;
    }
    //initialise un niveau
    initNiveau =  (chaineNiveau,n) => {
        let niveau = new Niveau ();
        niveau.setNniveau (n);
        let i = 0;
        let j = 0;
        niveau.aloueLigne (i);
        niveau.aloueLigne (i);

        for (let e of chaineNiveau) {
            if (e == '\n') {
                i += 1; j = 0
                niveau.aloueLigne (i);
            } else {
                niveau.ajoutEtat (i,j,e);
            }
            j += 1;
        }
        niveau.remplirUndefined ();
        return niveau;
    }
    //cette fonction lis le prochain niveau à chaque fois qu'on l'appel et incrémente la variable static
    lisLeProchainNiveau () {
        if (LectureNiveaux.nniveau < this.lesNiveaux.length) {
            let n = LectureNiveaux.nniveau;
            LectureNiveaux.nniveau += 1;
            return this.lesNiveaux [n];
        }
        console.log ("bravo Vous avez atteint tous les niveaux "+LectureNiveaux.nniveau+" "+this.lesNiveaux.length);
        return "success";
    }
};


export {LectureNiveaux};


