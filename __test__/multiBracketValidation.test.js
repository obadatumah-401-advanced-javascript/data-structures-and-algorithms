'use strict';

const validate = require('../multiBracketValidation/multi-bracket-validation');

describe('Brackets validation', () => {
    it('multiBracketValidation()', () => {
        expect(validate('()[[Extra Characters]]')).toBe(true);
        expect(validate('{}{Code}[Fellows](())')).toBe(true);
        expect(validate('()')).toBe(true);
        expect(validate('({{}})')).toBe(true);
    });

    it('multiBracketValidation()', () => {
        expect(validate('[({}]')).toBe(false);
        expect(validate('(](')).toBe(false);
        expect(validate('{(}')).toBe(false);
        expect(validate('(')).toBe(false);
    });
});