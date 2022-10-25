

class KosarView{
    constructor(elem, szuloElem){
        this.#elem=elem;
        szuloElem.append(`
        <div class="kosar">
        <p>Valami</p>
        <div>
        `)
        this.divElem= szuloElem.children("div:last-child")
    }

    
}

export default KosarView;