function double(num) {
  return num*2;
}

function sumAndDo(nums, callback) {
var sum=0;
for(var i=0;i<nums.length;i++)
sum+=nums[i];
return callback(sum);
}


