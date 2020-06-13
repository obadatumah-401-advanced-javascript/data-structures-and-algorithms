'use strict';

const Animal = require('../fifoAnimalShelter/fifo-animal-shelter');

describe('Animal Shelter', () => {
    it('enqueue()', () => {
        var animalObject = new Animal();
        expect( animalObject.enqueue('cat')).toEqual('added');
        expect( animalObject.enqueue('dog')).toEqual('added');
        expect( animalObject.enqueue('NOR')).toEqual('Only dogs and cats are allowed');
    });
});

describe('Animal Shelter', () => {
    it('dequeue()', () => {
        var animalObject = new Animal();
        expect( animalObject.dequeue('cat')).toEqual('cat');
        expect( animalObject.dequeue('dog')).toEqual('dog');
        expect( animalObject.dequeue('NOR')).toBeNull();
    });
});