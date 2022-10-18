class KonyvPublicView{
    #elem;
    constructor(elem, szuloElem){
        this.#elem=elem;
        szuloElem.append(`
        <div class="konyv">
        <p class="cim">${elem.cim}</p>
        <p>${elem.szerzo}</p>
        <p>${elem.ar}</p>
        <button id="kosarba${elem.id}">Kosárba</button>
        </div>`);
        this.#elem = szuloElem.children("div:last-child");

        this.kosarbaElem=$(`#kosarba${elem.id}`);

        this.kosarbaElem.on("click",()=>{
            console.log("Kosárba rak a view-ban")
            this.kattintastrigger("kosarba");
        });
    
    }

    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.id})
        window.dispatchEvent(esemeny);
    }
}

export default KonyvPublicView;