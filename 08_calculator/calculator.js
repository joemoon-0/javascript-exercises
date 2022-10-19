const add = function(num1, num2) {
    return num1 + num2;	
};

const subtract = function(num1, num2) {
    return num1 - num2;	
};

const sum = function(nums) {
    let total = 0;
    for (const i in nums) { total += nums[i]; }
    return total;
};

const multiply = function(nums) {
    let product = 1;
    for (const i in nums) { product *= nums[i]; }
    return product;
};

const power = function(num1, num2) {
    return Math.pow(num1, num2);	
};

const factorial = function(num) {
    let result = 1;
    if (num === 0) {
        return 1;
    }
    else {
        result = num * factorial(num - 1);
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
