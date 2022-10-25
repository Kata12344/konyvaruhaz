class KosarModell{
    #kosarTomb = []
    constructor(){
        this.#kosarTomb = [];

    }

    kosarba(elem){
        console.log(elem)
        this.#kosarTomb.push(elem)
    }
    getKosarTomb(){
        return this.#kosarTomb;
    }
}

export default KosarModell;