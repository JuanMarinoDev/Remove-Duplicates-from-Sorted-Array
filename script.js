const removeDuplicates = function(nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {  
    if (nums[i] !== nums[i+1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// Test ----> Expected output = 6
console.log(removeDuplicates([0,0,0,1,2,3,3,3,3,6,6,6,6,7]));