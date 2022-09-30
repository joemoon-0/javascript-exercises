const ftoc = function(ftemp) {
    let ctemp = (ftemp - 32) * 5/9;

    if (ctemp % 1) 
        return Number(ctemp.toFixed(1));
    return Number(ctemp);
};

const ctof = function(ctemp) {
    let ftemp = (ctemp * 9/5) + 32;

    if (ftemp % 1) 
        return Number(ftemp.toFixed(1));
    return Number(ftemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
