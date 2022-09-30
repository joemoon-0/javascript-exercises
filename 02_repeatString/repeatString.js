const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    let line = "";
    for (let i = 0; i < num; i++) {
        line += string; 
    }
    return line;
};

// Do not edit below this line
module.exports = repeatString;
