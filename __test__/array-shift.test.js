'use strict';

let Myfn = require('../arrayShift/array-shift');

describe('Array shift', ()=> {
    it('case one (insert into numbers array)', ()=> {
        let arr = [2, 5, 8, 9, 6, 4];
        expect(Myfn.insertShiftArray(arr,7)).toEqual([2, 5, 8, 7, 9, 6, 4]);
    });
});

describe('Array shift', ()=> {
    it('case two (insert into string array)', ()=> {
        let arr = ['obada','tumah'];
        expect(Myfn.insertShiftArray(arr,'hussein')).toEqual(['obada','hussein','tumah']);
    });
});