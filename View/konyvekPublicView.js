import KonyvPublicView from "./konyvPublicView.js";

class KonyvekPublicView{
    constructor(tomb,szuloElem){
        szuloElem.append(`
        <h1>Könyvek</h1>
        <div class="konyvek">
        </div>`);

        this.tombElem = szuloElem.children("div:last-child");

        tomb.forEach(konyv => {
            const konyvem = new KonyvPublicView(konyv,this.tombElem);
        });
    }
}

export default KonyvekPublicView;