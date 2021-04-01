
// Create a Restaurant (with a name, image URL, and a city)
// const Menu = require('./Menu')
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../Database/restaurants.sqlite');


class Restaurant {
    constructor(name, imageUrl) {
        this.name = name
        this.imageUrl = imageUrl
        // this.city = city
        this.menus = []
    }
    addMenu(menu) {
        this.menus.push(menu)
    }
    save(cb) {
        db.run("INSERT INTO Restaurant(name, imageUrl) VALUES(?, ?)", [this.name, this.imageUrl], cb);
    }
}

// const mcdonalds = new Restaurant('McDonalds', 'www.mcdonalds')
// mcdonalds.save(() => `SELECT * FROM Restaurant`)

// const mcDonalds = new Restaurant('McDonalds', 'imageurl', 'London')
// console.log(mcDonalds)
// mcDonalds.addMenu('apple pie')
// mcDonalds.addMenu('diet coke')
// mcDonalds.addMenu('chicken nuggets')
// console.log(mcDonalds)

module.exports = Restaurant