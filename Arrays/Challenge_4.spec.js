var findProduct  = require('./Challenge_4').findProduct;
var assert = require('assert');

describe('findProduct', function() {
    it('should return empty array since array is empty.', function() {
        assert.deepEqual(findProduct([]), [])
    })
    it('should return proper array since array has all positive elements.', function() {
        assert.deepEqual(findProduct([1,2,3,4]), [24,12,8,6])
    })
    it('should return proper array since array has mix of negative and positive elements.', function() {
        assert.deepEqual(findProduct([-1,2,3,4]), [24,-12,-8,-6])
    })
    it('should return proper array since array has all negative elements.', function() {
        assert.deepEqual(findProduct([-1,-2,-3,-4]), [-24,-12,-8,-6])
    })
    
})