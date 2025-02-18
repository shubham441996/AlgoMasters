/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let prefix=[1]
  let sufix=[]
  sufix[nums.length-1]=1
  for(let i=1;i<nums.length;i++){
     prefix[i]=prefix[i-1]* nums[i-1]
  }
  for(let i=nums.length-2;i>=0;i--){
    sufix[i]=sufix[i+1]*nums[i+1]
  }
  for(let i=0;i<nums.length;i++){
    nums[i]=prefix[i]* sufix[i]
  }
 return nums
};