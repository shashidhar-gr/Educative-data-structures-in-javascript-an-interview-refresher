var mergeArrays  = require('./Challenge_2').mergeArrays;
var assert = require('assert');

describe('mergeArrays', function() {
    it('should return [1, 2] since first array is empty.', function() {
        assert.deepEqual(mergeArrays([], [1, 2]), [1, 2])
    })
    it('should return [1, 2] since second array is empty.', function() {
        assert.deepEqual(mergeArrays([1 ,2], []), [1, 2])
    })
    it('should return [1, 1, 1, 1] since second array is empty.', function() {
        assert.deepEqual(mergeArrays([1 ,1], [1, 1]), [1, 1, 1, 1])
    })
    it('should return [-2, -2, -1, 0, 0, 1, 10] since second array is empty.', function() {
        assert.deepEqual(mergeArrays([0 ,-2, -1], [0, -2, 1, 10]), [-2, -2, -1, 0, 0, 1, 10])
    })
    it('should return [1, 2, 3, 4].', function() {
        assert.deepEqual(mergeArrays([1 ,4], [2, 3]), [1, 2, 3, 4])
    })
    it('should return [1,2,3,4,5,6,7,8].', function() {
        assert.deepEqual(mergeArrays([1,3,4,5], [2,6,7,8]), [1,2,3,4,5,6,7,8])
    })
});