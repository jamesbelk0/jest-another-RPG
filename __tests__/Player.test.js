const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('James');

    expect(player.name).toBe('James');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});