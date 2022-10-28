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

        
        tomb.forEach(elem => {
            this.divElem.append(`
            <div class="konyv">
            <p class="cim">${elem.cim}</p>
            <p>${elem.szerzo}</p>
            <img src="${elem.kep}" width="60%" height="50%">
            <p>${elem.ar} Ft</p>
            <button id="del${elem.id}">Töröl</button>
            </div>`)
        });

    }

    
}

export default KosarView;