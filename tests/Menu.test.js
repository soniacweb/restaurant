const Menu = require('../src/Menu')


describe('Menu object', () => {
    test('Menu has title', ()=> {
        const menu = new Menu('qwerty');
        expect(menu.title).toEqual('qwerty');
    })
    test('Menu has icon', ()=> {
        const menu = new Menu('qwerty', 'qwert');
        expect(menu.icon).toEqual('qwert');
    })
})