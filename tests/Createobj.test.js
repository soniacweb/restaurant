const Menu = require('../src/Menu')
const Item = require('../src/Item')
const Restaurant = require('../src/Restaurant')
// const FullRestaurantSpec = require('../src/creatobj')

describe('Create Obj Testing', () => {
    test('can add item to menu', ()=> {
        // const restaurant = new Restaurant('qwerty', 'imageUrl', 'city')
        const menu = new Menu('menuTitle', 'menuIcon')
        const item = new Item('itemName', 'itemPrice')
        menu.addItem(item)
        // console.log(menu.items)
        expect(menu.items).toEqual([{"name": "itemName", "price": "itemPrice"}]);
    })
   test('can add menu to restaurant', () => {
    const restaurant = new Restaurant('qwerty', 'imageUrl')
    const menu = new Menu('menuTitle', 'menuIcon')
    const item = new Item('itemName', 'itemPrice')
    menu.addItem(item)
    restaurant.addMenu(menu)
    console.log(restaurant.menus[0].items[0].name)
    expect(restaurant.menus[0].items[0].name).toEqual('itemName')
   })
})