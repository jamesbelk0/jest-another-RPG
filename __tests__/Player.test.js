const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

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

test("get plater's stats as an object", () => {
    const player = new Player('James');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns False', () => {
    const player = new Player('James');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

test("gets player's health valus", () => {
    const player = new Player('James');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('check if player is alive or not', () => {
    const player = new Player('James');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
    const player = new Player('James');
    const oldHealth = player.health;

    player.reduceHealth(5);
    
    expect(player.health).toBe(oldHealth -5);
    
    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

test("get player's attack value", () => {
    const player = new Player('James');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test('adds a potion to the inventory', () => {
    const player = new Player ('James');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test('uses a potion from inventory', () => {
    const player = new Player('James');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});

