var mergeArrays  = require('./Challenge_2').mergeArrays;
var mergeArraysUsginApi  = require('./Challenge_2').mergeArraysUsginApi;
var assert = require('assert');

describe('mergeArrays', function() {
    it('should return [1, 2] since first array is empty.', function() {
        assert.deepEqual(mergeArrays([], [1, 2]), [1, 2])
    })
    it('should return [1, 2] since second array is empty.', function() {
        assert.deepEqual(mergeArrays([1 ,2], []), [1, 2])
    })
    it('should return [1, 1, 1, 1].', function() {
        assert.deepEqual(mergeArrays([1 ,1], [1, 1]), [1, 1, 1, 1])
    })
    it('should return [-2, -2, 0, 0].', function() {
        assert.deepEqual(mergeArrays([-2 ,0], [-2, 0]), [-2, -2, 0, 0])
    })
    it('should return [-2, -1, -1, -1, 0, 1, 2, 10].', function() {
        assert.deepEqual(mergeArrays([-1, 0, 1, 2], [-2, -1, -1, 10]), [-2, -1, -1, -1, 0, 1, 2, 10])
    })
    it('should return [1, 2, 3, 4].', function() {
        assert.deepEqual(mergeArrays([1 ,4], [2, 3]), [1, 2, 3, 4])
    })
    it('should return [1,2,3,4,5,6,7,8].', function() {
        assert.deepEqual(mergeArrays([1,3,4,5], [2,6,7,8]), [1,2,3,4,5,6,7,8])
    })
});

describe('mergeArraysUsginApi', function() {
    it('should return [1, 2] since first array is empty.', function() {
        assert.deepEqual(mergeArraysUsginApi([], [1, 2]), [1, 2])
    })
    it('should return [1, 2] since second array is empty.', function() {
        assert.deepEqual(mergeArraysUsginApi([1 ,2], []), [1, 2])
    })
    it('should return [1, 1, 1, 1].', function() {
        assert.deepEqual(mergeArraysUsginApi([1 ,1], [1, 1]), [1, 1, 1, 1])
    })
    it('should return [-2, -2, 0, 0].', function() {
        assert.deepEqual(mergeArraysUsginApi([-2 ,0], [-2, 0]), [-2, -2, 0, 0])
    })
    it('should return [-2, -1, -1, -1, 0, 1, 2, 10].', function() {
        assert.deepEqual(mergeArraysUsginApi([-1, 0, 1, 2], [-2, -1, -1, 10]), [-2, -1, -1, -1, 0, 1, 2, 10])
    })
    it('should return [1, 2, 3, 4].', function() {
        assert.deepEqual(mergeArraysUsginApi([1 ,4], [2, 3]), [1, 2, 3, 4])
    })
    it('should return [1,2,3,4,5,6,7,8].', function() {
        assert.deepEqual(mergeArraysUsginApi([1,3,4,5], [2,6,7,8]), [1,2,3,4,5,6,7,8])
    })
})