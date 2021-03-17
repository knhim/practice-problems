/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const array = [];
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    array.push(runningSum);
  }
  return array;
};
