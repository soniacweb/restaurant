const Restaurant = require('../src/Restaurant')


describe('Restaurant object', () => {
    test('Restaurant has name', ()=> {
        const restaurant = new Restaurant('qwerty');
        expect(restaurant.name).toEqual('qwerty');
    })
    test('Restaurant has image url', ()=> {
        const restaurant = new Restaurant('qwerty', 'qwert');
        expect(restaurant.imageUrl).toEqual('qwert');
    })
    test('Restaurant has city', ()=> {
        const restaurant = new Restaurant('qwerty', 'qwert', 'test123');
        expect(restaurant.city).toEqual('test123');
    })
})

describe('Restaurants', () => {
    beforeAll((done) => {
        db.run('CREATE TABLE IF NOT EXISTS restaurant(id INTEGER PRIMARY KEY, name TEXT, image TEXT);', done)
    })

    test('When a Restaurant is created it is stored in the database', (done) => {
        const restaurant = new Restaurant({name: 'Boo Jangles', image: 'https://some.image.url'})
        expect(restaurant.id).toBe(1)
        restaurant.save(() => {
            db.get('SELECT * FROM restaurant WHERE id=?;', 1, (err, row) => {
                expect(row.name).toBe('Boo Jangles')
                done()
            })
        })
       
    })
})