// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list like so: (index1, index2).

function twoSum(nums, target) {
    // loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // subtract current value from target
        let subtractedNum = target - nums[i]
        // search for subtractedNum in array
        if (nums.includes(subtractedNum)) {
            // verify index is not the same
            if (i !== nums.indexOf(subtractedNum)) {
                return [i, nums.indexOf(subtractedNum)]
            }
        }
        
    }
}

console.log(twoSum([2,2,3], 4))