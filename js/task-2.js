


class Storage{
    #items
    constructor(items){
        this.#items = items
    }
    getItems(){
        return this.#items
    }
    addItem(newItem){
        newItem = this.#items
        return newItem.push(this.#items)
    }
    removeItem(itemToRemove){
        const indexItem = this.#items.indexOf(itemToRemove)
        if (indexItem !== -1){
            this.#items.splice(indexItem,1)
        }
    }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
