const removeFromArray = function() {
    let container = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let index = arguments[0].indexOf(arguments[i]);
        if (index != -1) {
            arguments[0].splice(index, 1);
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
