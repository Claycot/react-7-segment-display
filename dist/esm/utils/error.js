// this function will get an array of digits representing error
// it will do its best to show "E r r" given the display configuration
export function getErrorDigits(count, rhsOnlyFirstDigit) {
    // prioritize adding error digits in this order "e", "r", "r"
    const errDigits = ["e", "r", "r"];
    const outDigits = [];
    // if the first digit is an rhsOnly, it must be blank
    if (rhsOnlyFirstDigit) {
        outDigits.push(" ");
    }
    // for each remaining digit in the display, add either an err char or a blank
    while (outDigits.length < count) {
        const remainingDigits = count - outDigits.length;
        // if there are more digits to add than err digits, pad with blanks
        if (remainingDigits > errDigits.length) {
            outDigits.push(" ");
        }
        // otherwise, pull from the start of the err digits array
        else {
            // use non-null assertion because else ensures array is not empty
            outDigits.push(errDigits.shift());
        }
    }
    return outDigits;
}
//# sourceMappingURL=error.js.map