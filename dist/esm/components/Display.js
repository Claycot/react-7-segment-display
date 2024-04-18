// this is the entry point for the component!
// it will create a Display, which is a collection of Digits, which are made up of lit/unlit Segments
import { getErrorDigits } from "../utils/error";
import { Digit } from "./Digit";
import React, { useEffect, useState } from "react";
export const Display = ({ count = 2, height = 250, value = null, color = "red", backgroundColor, skew = false, paddingInner = "20px", paddingOuter = "20px", blankChar = "-", leadingZeroes = true, rhsOnlyFirstDigit = false, }) => {
    const [digits, setDigits] = useState([]);
    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
        padding: paddingInner,
    };
    const displayStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
        padding: paddingOuter,
        color: "white",
    };
    // set the display's digits when either the number of digits or the display value changes
    useEffect(() => {
        // split an incoming value into an array of chars to display
        let newDigits = value && value.toString().split("");
        let errState = false;
        // if the input value is not provided, leave the display blank
        if (!value) {
            newDigits = null;
        }
        // if the display is too small for the input digits, set digits to error
        else if (count < value.toString().length) {
            errState = true;
        }
        // if there is a value and we have enough more than enough display digits for it, pad the start with zeroes or blanks
        else if (count > value.toString().length) {
            for (let i = 0; i < count - value.toString().length; i++) {
                // pad with zeroes if leadingZeroes
                if (leadingZeroes) {
                    newDigits.unshift("0");
                }
                // otherwise, pad with blank spaces
                else {
                    newDigits.unshift(" ");
                }
            }
            // in an edge case where rhsOnlyFirstDigit is selected and the first digit is a leading zero, set it to blank
            if (rhsOnlyFirstDigit && leadingZeroes && newDigits[0] === "0") {
                newDigits[0] = " ";
            }
        }
        // the "else" case here is that we have the perfect amount of digits for the display
        // check a special error case for rhsOnlyFirstDigit where the first digit is cut in half (can only accommodate blank or 1)
        if (!errState &&
            rhsOnlyFirstDigit &&
            newDigits[0] !== " " &&
            newDigits[0] !== "1") {
            errState = true;
        }
        // for each digit in the display, set the values!
        setDigits(errState ? getErrorDigits(count, rhsOnlyFirstDigit) : newDigits);
    }, [count, value]);
    return (React.createElement("div", { className: "display", style: displayStyle },
        React.createElement("div", { className: "display-digits", style: style }, digits
            ? digits.map((digit, index) => {
                // if the digits array is present, create each one as an elem
                return (React.createElement(Digit, { key: index, char: digit, blankChar: blankChar, height: height, color: color, skew: skew, rhsOnly: rhsOnlyFirstDigit && index === 0 }));
            })
            : Array.from(Array(count).keys()).map((index) => {
                // if the digits array is not present, create each digit with a blank char
                return (React.createElement(Digit, { key: index, char: blankChar, blankChar: blankChar, height: height, color: color, skew: skew, rhsOnly: rhsOnlyFirstDigit && index === 0 }));
            }))));
};
//# sourceMappingURL=Display.js.map