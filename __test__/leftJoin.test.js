'use strict';

// let join = require('../leftJoin/leftJoin');
const leftJoin = require('../leftJoin/leftJoin');

describe('left table join', ()=> {
    let table1,table2;
    beforeAll(()=>{
        table1 = {
            'onePiece': 'Luffy',
            'naruto': 'Itachi',
            'bleach': 'Ichigo',
            'AOT': 'Eren'
        }

        table2 = {
            'onePiece': 'Zoro',
            'bleach': 'Aizen',
            'AOT': 'Levi'
        }
    })
    it('join two tables from left', ()=> {
        let expected = [
            [ 'onePiece', 'Luffy', 'Zoro' ],
            [ 'naruto', 'Itachi', null ],
            [ 'bleach', 'Ichigo', 'Aizen' ],
            [ 'AOT', 'Eren', 'Levi' ]
          ];
        expect(leftJoin(table1,table2)).toEqual(expected);
    });

    it('join two tables in reverse order', ()=> {
        let expected = [
            [ 'onePiece', 'Zoro', 'Luffy' ],
            [ 'bleach', 'Aizen', 'Ichigo' ],
            [ 'AOT', 'Levi', 'Eren' ]
          ];
        expect(leftJoin(table2,table1)).toEqual(expected);
    });
});