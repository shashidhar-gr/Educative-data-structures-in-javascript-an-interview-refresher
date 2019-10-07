var maxMin = require('./Challenge_10').maxMin;
var assert = require('assert');

describe('maxMin', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(maxMin([]), undefined)
    })
    it('should return [-1] since array contains.', function() {
        assert.deepEqual(maxMin([-1]), [-1])
    })
    it('should return [9, 6] since array contains.', function() {
        assert.deepEqual(maxMin([6, 9]), [9, 6])
    })
})
