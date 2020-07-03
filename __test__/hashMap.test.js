'use strict';

const HashMap = require('../hashMap/hashMap');

describe('Hash Map', ()=> {
    it('Hash()', ()=> {
        let myHash = new HashMap(1024);
        let hashing = myHash.hash('obada');
        expect(hashing).toBe(241);
    });

    it('add()', ()=> {
        let myHash = new HashMap(1024);
        let hashing = myHash.add('OnePiece', 'Luffy');
        expect(hashing).toEqual({"OnePiece":"Luffy"});
    });

    it('get()', ()=> {
        let myHash = new HashMap(1024);
        myHash.add('OnePiece', 'Luffy');
        let hashing = myHash.get('OnePiece');

        expect(hashing).toEqual('Luffy');
    });

    it('contains()', ()=> {
        let myHash = new HashMap(1024);
        myHash.add('OnePiece', 'Luffy');
        let hashing = myHash.contains('OnePiece');
        let hashing2 = myHash.contains('haha');
        expect(hashing).toBe(true);
        expect(hashing2).toBe(false);
    });
});