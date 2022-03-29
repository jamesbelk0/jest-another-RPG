const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
console.log(new Potion());

test('creats a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});

