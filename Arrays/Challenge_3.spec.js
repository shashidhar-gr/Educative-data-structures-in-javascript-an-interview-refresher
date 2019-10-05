var findPair  = require('./Challenge_3').findPair;
var findPairUsingApi  = require('./Challenge_3').findPairUsingApi;
var assert = require('assert');

describe('findPair', function() {
    it('should return false since array is empty and n is undefined.', function() {
        assert.deepEqual(findPair([]), false)
    })
    it('should return false since n is undefined.', function() {
        assert.deepEqual(findPair([1]), false)
    })
    it('should return false since array is empty.', function() {
        assert.deepEqual(findPair([], 1), false)
    })
    it('should return proper elements.', function() {
        assert.deepEqual(findPair([1, 2], 3), [1, 2])
    })
    it('should return proper elements.', function() {
        assert.deepEqual(findPair([1,21,3,14,5,60,7,6], 81), [21,60])
    })
})

describe('findPairUsingApi', function() {
    it('should return false since array is empty and n is undefined.', function() {
        assert.deepEqual(findPairUsingApi([]), false)
    })
    it('should return false since n is undefined.', function() {
        assert.deepEqual(findPairUsingApi([1]), false)
    })
    it('should return false since array is empty.', function() {
        assert.deepEqual(findPairUsingApi([], 1), false)
    })
    it('should return proper elements.', function() {
        assert.deepEqual(findPairUsingApi([1, 2], 3), [1, 2])
    })
    it('should return proper elements.', function() {
        assert.deepEqual(findPairUsingApi([1,21,3,14,5,60,7,6], 81), [21,60])
    })
})