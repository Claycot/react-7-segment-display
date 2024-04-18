// this function will get an array of digits representing error
// it will do its best to show "E r r" given the display configuration
export function getErrorDigits(count, rhsOnlyFirstDigit) {
    // prioritize adding error digits in this order "e", "r", "r"
    const errDigits = ["e", "r", "r"];
    let outDigits = [];
    // validDigits for adding err digits decreases by 1 if rhsOnlyFirstDigit is enabled
    const validDigits = count - (rhsOnlyFirstDigit ? 1 : 0);
    if (rhsOnlyFirstDigit) {
        outDigits.push(" ");
    }
    // for each error digit, add it if there's space left in the display
    for (let i = 0; i <= validDigits; i++) {
        if (outDigits.length < count) {
            outDigits.push(errDigits[i]);
        }
        else {
            break;
        }
    }
    return outDigits;
}
//# sourceMappingURL=error.js.map