'use strict';

let Myfn = require('../arrayReverse/array-reverse');

describe('Array reverse', ()=> {
    it('case one (Reverse array with length more than 1)', ()=> {
        let arr = [2, 5, 8, 9, 6, 4];
        expect(Myfn.reverseArray(arr)).toEqual([4, 6, 9, 8, 5, 2]);
    });
});

describe('Array reverse', ()=> {
    it('case two (Reverse array with length 1)', ()=> {
        let arr = [2];
        expect(Myfn.reverseArray(arr)).toEqual([2]);
    });
});

describe('Array reverse', ()=> {
    it('case three (Reverse array with string values)', ()=> {
        let arr = ['obada','hussein','mahmoud','tumah'];
        expect(Myfn.reverseArray(arr)).toEqual(['tumah','mahmoud','hussein','obada']);
    });
});