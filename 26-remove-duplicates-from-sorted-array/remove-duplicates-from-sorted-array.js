/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let k=0
  for(let i=0;i<nums.length;i++){
    if(nums[i+1]!=undefined   && nums[i]===nums[i+1]){
      nums.splice(i,1)
      nums.push(null)
      k++
      i--
    }
  }
  return nums.length-k  
};