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