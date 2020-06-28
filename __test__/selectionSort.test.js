'use strict';

const sort = require('../selectionSort/selectionSort');

describe('selection sort', () => {
    it('nearly sorting', () => {
        const expected = [ 2, 3, 5, 7, 11, 13 ];
        const value = [2,3,5,7,13,11];
        expect(sort.SelectionSort(value)).toEqual(expected);
    });

    it('reverse sorting', () => {
        const expected = [ -2, 5, 8, 12, 18, 20 ];
        const value = [20,18,12,8,5,-2];
        expect(sort.SelectionSort(value)).toEqual(expected);
    });
})