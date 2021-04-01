const sqlite3 = require('sqlite3').verbose();

// connecting to database created in initialiseDB
const db = new sqlite3.Database('./restaurants.sqlite');

const fsp = require('fs').promises; // Node.js file system module with promises

async function load() {
    console.log('calling load');
    // wait for the restaurant data file to be read
    try { 
    const buffer = await fsp.readFile('./restaurants.json');
    const restaurants = (JSON.parse(String(buffer)));
    console.log(restaurants);
    return restaurants;
    }
    catch(error) {
        console.log(error,"this is the error msg")
    }
}

    load().then(function(data) {
    db.serialize(function () { 

        let restaurantCount= 0
        let menuCount = 0

        data.forEach(res => {
            restaurantCount++
            db.run(`INSERT INTO Restaurant (name,image) 
            VALUES (?,?)`, [res.name, res.image]);

            res.menus.forEach(menu => {
                db.run(`INSERT INTO Menu (title, restaurant_id)
                VALUES (?,?)`, [menu.title, restaurantCount]);
                
                menu.items.forEach(item => {
                    menuCount++
                    db.run(`INSERT INTO MenuItem (name, price, menu_id)
                    VALUES (?,?,?)`, [item.name, item.price, menuCount])
                })
            })
        });
    })
})

