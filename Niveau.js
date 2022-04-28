var Niveau = class {
    constructor () {
        this.lignes = 0;
        this.colonnes = 0;
        this.sokoban = [];
        this.n = 1;
    }

    getLignes  =  () => this.lignes;
    getColonnes =  () => this.colonnes;
    getNNiveau  = () => this.n;
    setLignes =  l => this.lignes = l;
    ajoutEtat = (l,c,e) =>  {
        this.sokoban [l][c] = e;
    };
    setColonnes = c => this.colonnes = c;
    setNniveau = n => this.n = n;
    estVide =  (l,c) => {return this.sokoban [l][c] === ' '};
    estMur = (l,c) => this.sokoban [l][c] === '#';
    estPousseur = (l,c) => this.sokoban [l][c] === '@';
    estBut = (l,c) => this.sokoban [l][c] === '.';
    aloueLigne = (i) => this.sokoban [i] = [];
    remplirUndefined = () => {
        for (let i = 0; i < this.sokoban.length; i ++) {
            for (let j = 0; j < this.sokoban [i].length; j ++) {
                if (this.sokoban [i][j] === undefined) {
                    console.log ('und');
                    this.sokoban [i][j] = ' ';
                }
            }
            
        }
        this.setLignes (this.sokoban.length);
        this.setColonnes (this.sokoban[0].length);
    };
    afficherNiveau = () => {
        let str = "";
        let l = this.getLignes ();
        let c =  this.getColonnes ();
        for (let i = 0; i < this.sokoban.length; i ++) {
            for (let j = 0; j < this.sokoban [i].length; j ++) {
                str += this.sokoban [i][j];
            }
            str += "\n";
        }
        console.log ("Niveau :",this.getNNiveau (),"-> lignes*colonnes :"+this.getLignes ()+"*"+this.getColonnes ());
        console.log (str);
    };

};

export {Niveau};