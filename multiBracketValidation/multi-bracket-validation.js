'use strict';

function multiBracketValidation(str) {
    var newArr = str.split("");
    var round = 0;
    var square = 0;
    var curly = 0;
    newArr.forEach(val => {
        if (val == '(' || val == ')') {
            round++;
        }
        else if (val == '[' || val == ']') {
            square++;
        }
        else if (val == '{' || val == '}') {
            curly++;
        }
    })

    if (round % 2 == 0 && square % 2 == 0 && curly % 2 == 0) {
        return true;
    }
    return false;

}

module.exports = multiBracketValidation;    
