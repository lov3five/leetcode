/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [...nums1, ...nums2].sort((a,b) => a - b)
    if(nums3.length%2 === 0) {
        //even
        let midNum = nums3.length/2
        return (nums3[midNum] + nums3[midNum -1])/2;
    } else {
        //odd
        let midNum = (nums3.length-1) / 2;
        return nums3[midNum]
    }
};