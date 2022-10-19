const fibonacci = function(num) {
    let first = 1;
    let second = 1;
    let temp = 0;

    if (num <= 0) return "OOPS";
    if (num == 1) return first;
    if (num == 2) return second;

    for (let i = 2; i < num; i++) {
        temp = second;
        second += first;
        first = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
