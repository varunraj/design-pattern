var Storage = require('./Storage');

class Store {

    constructor(name, inventory=[]) {
        this.name = name;

        var floor = new Storage('store floor', inventory.floor);
        var backroom = new Storage('store backroom', inventory.backroom);
        var localStore = new Storage('nearby store', inventory.localStore, 1); // 1 is delay to get item from localstore storage
        var warehouse = new Storage('warehouse', inventory.warehouse, 5); // 5 is delay

        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor;

    }

    find(itemName) {
        return this.storage.find(itemName);
    }

}

module.exports = Store;
