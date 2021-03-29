// const Restaurant = require('../src/Restaurant')


class Menu {
    constructor(title, icon) {
        this.title = title
        this.icon = icon
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
        // console.log(this.items)
    }

    deleteItem(item) {
        const itemIndex = this.items.indexOf(item)
        console.log('splicing', this.items.splice(itemIndex, 1))
    }
}

// const mcDonalds = new Menu('McDonalds cheese burger', 'yum')
// console.log('before items added to menu', mcDonalds)
// mcDonalds.addItem('Cheese Burger')
// mcDonalds.addItem('Large Fries')
// mcDonalds.addItem('Medium Fries')
// mcDonalds.addItem('Small Fries')

//after item added
// console.log(mcDonalds)
// mcDonalds.deleteItem('Large Fries')
// console.log('after deletion', mcDonalds)

module.exports = Menu