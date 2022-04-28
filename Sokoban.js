//Les niveaux du jeu
const niveaux = {
    "1": "    #####          \n    #   #          \n    #$  #          \n  ###  $##         \n  #  $ $ #         \n### # ## #   ######\n#   # ## #####  ..#\n# $  $          ..#\n##### ### #@##  ..#\n    #     #########\n    #######",
    "2": "############  \n#..  #     ###\n#..  # $  $  #\n#..  #$####  #\n#..    @ ##  #\n#..  # #  $ ##\n###### ##$ $ #\n  # $  $ $ $ #\n  #    #     #\n  ############\n",
    "3": "        ######## \n        #     @# \n        # $#$ ## \n        # $  $#  \n        ##$ $ #  \n######### $ # ###\n#....  ## $  $  #\n##...    $  $   #\n#....  ##########\n########         \n",
    "4": "           ########\n           #  ....#\n############  ....#\n#    #  $ $   ....#\n# $$$#$  $ #  ....#\n#  $     $ #  ....#\n# $$ #$ $ $########\n#  $ #     #       \n## #########       \n#    #    ##       \n#     $   ##       \n#  $$#$$  @#       \n#    #    ##       \n###########        \n",
    "5": "        #####    \n        #   #####\n        # #$##  #\n        #     $ #\n######### ###   #\n#....  ## $  $###\n#....    $ $$ ## \n#....  ##$  $ @# \n#########  $  ## \n        # $ $  # \n        ### ## # \n          #    # \n          ###### \n",
    "6": "######  ### \n#..  # ##@##\n#..  ###   #\n#..     $$ #\n#..  # # $ #\n#..### # $ #\n#### $ #$  #\n   #  $# $ #\n   # $  $  #\n   #  ##   #\n   #########\n",
    "7": "       ##### \n #######   ##\n## # @## $$ #\n#    $      #\n#  $  ###   #\n### #####$###\n# $  ### ..# \n# $ $ $ ...# \n#    ###...# \n# $$ # #...# \n#  ### ##### \n####         \n",
    "8": "  ####          \n  #  ###########\n  #    $   $ $ #\n  # $# $ #  $  #\n  #  $ $  #    #\n### $# #  #### #\n#@#$ $ $  ##   #\n#    $ #$#   # #\n#   $    $ $ $ #\n#####  #########\n  #      #      \n  #      #      \n  #......#      \n  #......#      \n  #......#      \n  ########      \n",
    "9": "          #######\n          #  ...#\n      #####  ...#\n      #      . .#\n      #  ##  ...#\n      ## ##  ...#\n     ### ########\n     # $$$ ##    \n #####  $ $ #####\n##   #$ $   #   #\n#@ $  $    $  $ #\n###### $$ $ #####\n     #      #    \n     ########    \n",
    "10": " ###  #############\n##@####       #   #\n# $$   $$  $ $ ...#\n#  $$$#    $  #...#\n# $   # $$ $$ #...#\n###   #  $    #...#\n#     # $ $ $ #...#\n#    ###### ###...#\n## #  #  $ $  #...#\n#  ## # $$ $ $##..#\n# ..# #  $      #.#\n# ..# # $$$ $$$ #.#\n##### #       # #.#\n    # ######### #.#\n    #           #.#\n    ###############\n"
}
// une classe Niveau
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
//une classe pour lire les niveaux
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

//Test
var lect = new LectureNiveaux (niveaux);
for (let i = 1; i < 12; i ++) {
    let n = lect.lisLeProchainNiveau ();
    if (n !== "success") {
        n.afficherNiveau ();
    }
}