import { LectureNiveaux } from "./LectureNiveaux.js";
import { niveaux } from "./Niveaux/Niveaux.js";

var lect = new LectureNiveaux (niveaux);
for (let i = 1; i < 12; i ++) {
    let n = lect.lisLeProchainNiveau ();
    if (n !== "success") {
        n.afficherNiveau ();
    }
}