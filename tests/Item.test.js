const Item = require('../src/Item')

describe('Item object', () => {
    test('Item has name', ()=> {
        const item = new Item('qwerty');
        expect(item.name).toEqual('qwerty');
    })
    test('Item has price', ()=> {
        const item = new Item('qwerty', 'qwert');
        expect(item.price).toEqual('qwert');
    })
})