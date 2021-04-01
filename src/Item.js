const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../Database/restaurants.sqlite');

class Item {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    save(cb) {
        db.run("INSERT INTO Item (name, price) VALUES(?, ?)", [this.title, this.price], cb);
    }
}


// const items = new Item('foiroi', 'oifhfeoiv')
// console.log(items)
module.exports = Item