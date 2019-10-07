var reArrange = require('./Challenge_9').reArrange;
var assert = require('assert');

describe('reArrange', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(reArrange([]), undefined)
    })
    it('should return [-1] since array contains.', function() {
        assert.deepEqual(reArrange([-1]), [-1])
    })
    it('should return [6, 9] since array contains.', function() {
        assert.deepEqual(reArrange([9, 6]), [9, 6])
    })
    it('should return [-1, -9, 20, 10] since array contains.', function() {
        assert.deepEqual(reArrange([-1, 10, 20, -9]), [-1, -9, 20, 10])
    })
    it('should return [-1,-9,-6,10,20,4,5] since array contains.', function() {
        assert.deepEqual(reArrange([10,-1,20,4,5,-9,-6]), [-6,-1,-9,4,5,20,10])
    })
})