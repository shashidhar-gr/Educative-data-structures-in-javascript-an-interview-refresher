var secondMax = require('./Challenge_7').secondMax;
var assert = require('assert');

describe('secondMax', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(secondMax([]), undefined)
    })
    it('should return -1 since array contains.', function() {
        assert.deepEqual(secondMax([-1]), -1)
    })
    it('should return 6 since array contains.', function() {
        assert.deepEqual(secondMax([9,6]), 6)
    })
    it('should return 2 since array contains.', function() {
        assert.deepEqual(secondMax([1, 2, 0, -6, 3]), 2)
    })
})