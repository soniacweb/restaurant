
// Create a Restaurant (with a name, image URL, and a city)
// const Menu = require('./Menu')

class Restaurant {
    constructor(name, imageUrl, city) {
        this.name = name
        this.imageUrl = imageUrl
        this.city = city
        this.menus = []
    }
    addMenu(menu) {
        this.menus.push(menu)
    }
}

// const mcDonalds = new Restaurant('McDonalds', 'imageurl', 'London')
// console.log(mcDonalds)
// mcDonalds.addMenu('apple pie')
// mcDonalds.addMenu('diet coke')
// mcDonalds.addMenu('chicken nuggets')
// console.log(mcDonalds)

module.exports = Restaurant