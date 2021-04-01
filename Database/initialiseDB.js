const sqlite3 = require('sqlite3').verbose();

// use a persistent database named myDb.sqlite
const db = new sqlite3.Database('./restaurants.sqlite');

/**
 * Executes the SQL statements one at a time.
 */
try {
    db.serialize(function () { // serialize means execute one statement at a time

        // delete tables that already exist
        db.run(`DROP TABLE IF EXISTS Restaurant`);
        db.run(`DROP TABLE IF EXISTS Menu`);
        db.run(`DROP TABLE IF EXISTS MenuItem`);

        // create the empty table with specific columns and column types
        db.run(`CREATE TABLE Restaurant(id INTEGER PRIMARY KEY, 
            name TEXT, 
            imageUrl TEXT)`);

        db.run(`CREATE TABLE Menu(id INTEGER PRIMARY KEY, 
            title TEXT, 
            icon TEXT,
            restaurant_id INT, 
            FOREIGN KEY(restaurant_id) REFERENCES Restaurant(id))`);
        
        db.run(`CREATE TABLE Item(id INTEGER PRIMARY KEY, 
            name TEXT, 
            price REAL,
            menu_id INT, 
            FOREIGN KEY(menu_id) REFERENCES Menu(id))`);
        
            
        db.each("SELECT * FROM Menu",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );

        //connecting the menu to the restaurant 
        db.each("SELECT * FROM Restaurant JOIN Menu ON Restaurant.id = Menu.restaurant_id",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );
        })     
} finally {
    db.close();
}