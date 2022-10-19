const palindromes = function (str) {
    const strSplit = str.split("");
    const cleanStr = strSplit.filter(char => {
        if (isAlpha(char)) {
            return char.toLowerCase();
        }
    });

    let reverseSplit = [...cleanStr];
    const reversed = reverseSplit.reverse().join("").toLowerCase();
    const newStr = cleanStr.join("").toLowerCase();

    return newStr === reversed;
};

const isAlpha = (ch) => {
    return typeof ch === "string" &&
        ch.length === 1 &&
        (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
};

// Do not edit below this line
module.exports = palindromes;
