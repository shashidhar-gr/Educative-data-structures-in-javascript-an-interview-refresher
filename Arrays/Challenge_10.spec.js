var maxMin = require('./Challenge_10').maxMin;
var assert = require('assert');

describe('maxMin', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(maxMin([]), undefined)
    })
    it('should return [-1] since array contains.', function() {
        assert.deepEqual(maxMin([-1]), [-1])
    })
    it('should return [5,1,4,2,3] since array contains.', function() {
        assert.deepEqual(maxMin([1,2,3,4,5]), [5,1,4,2,3])
    })
    it('should return [6,1,5,2,4,3] since array contains.', function() {
        assert.deepEqual(maxMin([1,2,3,4,5,6]), [6,1,5,2,4,3])
    })
})
