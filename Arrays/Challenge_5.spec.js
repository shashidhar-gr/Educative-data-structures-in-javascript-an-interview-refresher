var findMinimum  = require('./Challenge_5').findMinimum;
var findMinimumUsingApi  = require('./Challenge_5').findMinimumUsingApi;
var findMinimumIerateMethod  = require('./Challenge_5').findMinimumIerateMethod;
var assert = require('assert');

describe('findMinimum', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(findMinimum([]), undefined)
    })
    it('should return -1 since array contains.', function() {
        assert.deepEqual(findMinimum([-1]), -1)
    })
    it('should return 2 since array contains.', function() {
        assert.deepEqual(findMinimum([3, 4, 2, 3, 6]), 2)
    })
})

describe('findMinimumUsingApi', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(findMinimumUsingApi([]), undefined)
    })
    it('should return -1 since array contains.', function() {
        assert.deepEqual(findMinimumUsingApi([-1]), -1)
    })
    it('should return 2 since array contains.', function() {
        assert.deepEqual(findMinimumUsingApi([3, 4, 2, 3, 6]), 2)
    })
})

describe('findMinimumIerateMethod', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(findMinimumIerateMethod([]), undefined)
    })
    it('should return -1 since array contains.', function() {
        assert.deepEqual(findMinimumIerateMethod([-1]), -1)
    })
    it('should return 2 since array contains.', function() {
        assert.deepEqual(findMinimumIerateMethod([3, 4, 2, 3, 6]), 2)
    })
})