const reverseString = function(string) {
    let reversed = "";
    let str_len = string.length;
    for (let i = 0; i < str_len; i++) {
        reversed += string[(str_len - 1) - i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
