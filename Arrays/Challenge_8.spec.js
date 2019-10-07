var rigthRotate = require('./Challenge_8').rigthRotate;
var assert = require('assert');

describe('rigthRotate', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(rigthRotate([]), undefined)
    })
    it('should return [-1] since array contains.', function() {
        assert.deepEqual(rigthRotate([-1]), [-1])
    })
    it('should return [6, 9] since array contains.', function() {
        assert.deepEqual(rigthRotate([9, 6], 1), [6, 9])
    })
    it('should return [3, 4, 5, 1, 2] since array contains.', function() {
        assert.deepEqual(rigthRotate([1, 2, 3, 4, 5], 3), [3, 4, 5, 1, 2])
    })
})