import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        
        const konyvmodel = new KonyvModel();
        $("#admin").on("click", ()=>{
            konyvmodel.adatBe("../adat.json", this.konyvAdatok);
        });

        $("#pub").on("click", ()=>{
            konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);
        })
        

        $(window).on("modosit",(event)=>{
            console.log("controllerben módosít", event.detail)
            konyvmodel.adatModosit(event.detail)
        })
        $(window).on("torol",(event)=>{
            console.log("controllerben töröl", event.detail)
            konyvmodel.adatTorol(event.detail)
        })
    }

    konyvPublicAdatok(tomb){
        const szuloElem =$("main");
        new KonyvekPublicView(tomb, szuloElem);
    }

    konyvAdatok(tomb) {
        const szuloElem =$("main");
        new KonyvekView(tomb, szuloElem);
        //console.log(tomb);
    }
}

export default KonyvController;