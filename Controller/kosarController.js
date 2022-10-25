import KosarModell from "../Model/kosarModell.js";
import KosarView from "../View/kosarView.js";

class KosarController{
    #elem;
    constructor(elem){
        this.#elem=elem;
        const kosarmodell = new KosarModell();

        $("#kosaram").on("click", ()=>{
            $('main').empty();
            console.log(kosarmodell.getKosarTomb())
            this.kosarAdatok(kosarmodell.getKosarTomb());
        });

        $(window).on("kosarba", (event)=>{
            //console.log(event.detail)
            kosarmodell.kosarba(event.detail);
        })
    }

    kosarAdatok(tomb){
        const szuloElem = $("main");
        new KosarView(tomb, szuloElem)
    }
}

export default KosarController;