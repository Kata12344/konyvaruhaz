import KosarModell from "../Model/kosarModell.js";
import KosarView from "../Controller/KonyvController.js";

class KosarController{
    #elem;
    constructor(elem){
        this.#elem=elem;
        const kosarmodell = new KosarModell();

        $("#kosaram").on("click", ()=>{
            $('main').empty();
            kosarmodell.getKosarTomb();
            console.log(kosarmodell.getKosarTomb())
            new KosarView(kosarmodell.getKosarTomb(),this.kosarAdatok);
        });

        $(window).on("kosarba", (event)=>{
            //console.log(event.detail)
            kosarmodell.kosarba(event.detail);
        })
    }

    kosarAdatok(elem){
        const szuloElem = $("main");
        new KosarView(elem, szuloElem)
    }
}

export default KosarController;