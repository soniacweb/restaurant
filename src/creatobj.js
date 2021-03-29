const Menu = require('./Menu')
const Restaurant = require('../src/Restaurant')
const Item = require('../src/Item')

function FullRestaurantSpec(name, imageUrl, city, menuTitle, menuIcon, itemName, itemPrice) {
 const restaurant = new Restaurant(name, imageUrl, city)
 const menu = new Menu(menuTitle, menuIcon)
 const item = new Item(itemName, itemPrice)
 menu.addItem(item)
 restaurant.addMenu(menu)
 console.log(restaurant) 
 console.log('Item Menu Name:', restaurant.menus[0].items[0].name) 
 console.log('Item Menu Price:', restaurant.menus[0].items[0].price) 

    
}

FullRestaurantSpec('Nandos', 'imageUrl', 'Milton Keynes', 'Grilled Chicken', 'menuIcon', 'Half Chicken', '£10') 
