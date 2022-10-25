import KonyvPublicView from "./konyvekPublicView.js";

class KosarView{
    #tomb=[]
    constructor(tomb, szuloElem){
        this.#tomb=tomb;
        szuloElem.append(`
        <div class="kosar">
        <h1>Kosaram tartalma</h1>
        <div>
        `)
        this.divElem= szuloElem.children("div:last-child")

        //javításra szorul
        
        tomb.forEach(elem => {
            this.divElem.append(`<div>${elem.ar}</div>`)
        });
    }

    
}

export default KosarView;