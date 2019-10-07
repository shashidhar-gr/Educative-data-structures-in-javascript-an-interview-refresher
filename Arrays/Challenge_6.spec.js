var findFirstNonRepeatingNumber  = require('./Challenge_6').findFirstNonRepeatingNumber;
var assert = require('assert');

describe('findFirstNonRepeatingNumber', function() {
    it('should return undefined since array contains.', function() {
        assert.deepEqual(findFirstNonRepeatingNumber([]), undefined)
    })
    it('should return -1 since array contains.', function() {
        assert.deepEqual(findFirstNonRepeatingNumber([-1]), -1)
    })
    it('should return 9 since array contains.', function() {
        assert.deepEqual(findFirstNonRepeatingNumber([9,2,3,2,6,6]), 9)
    })
    it('should return 1 since array contains.', function() {
        assert.deepEqual(findFirstNonRepeatingNumber([9,9,2,3,3,2,6,6,1,4]), 1)
    })
    it('should return -1 since array contains.', function() {
        assert.deepEqual(findFirstNonRepeatingNumber([9,9,2,3,3,2]), -1)
    })
})