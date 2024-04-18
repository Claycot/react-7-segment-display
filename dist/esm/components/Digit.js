// a Digit is a collection of Segments, in lit/unlit states to represent a value
import Segment from "./Segment";
import React, { useEffect, useState } from "react";
import charToDigit from "../utils/charToDigit";
// this array is used as a map to transform index to Segment letter
// Segments are [A, B, C, D, E, F, G] starting at the top-horizontal (A),
// letters progress clockwise, and middle-horizontal is last (G)
const letters = ["A", "B", "C", "D", "E", "F", "G"];
export const Digit = ({ char = "-", blankChar = "-", color = "red", height = 250, skew = false, rhsOnly = false, }) => {
    const style = {
        height: `${height}px`,
        width: rhsOnly ? `${height * 0.2}px` : `${height * 0.6}px`,
        zIndex: "1",
        padding: skew ? "8px 0px" : "0",
        boxSizing: "border-box",
    };
    // activeArray holds lit/unlit values for each Segment
    // if the char is provided, light its Segments
    // otherwise, light the Segments for blank character
    const [activeArray, setActiveArray] = useState(
    // with the rhsOnly check, it will only display a value if it's "1"
    char && (!rhsOnly || char === "1")
        ? charToDigit[char]
        : charToDigit[blankChar]);
    useEffect(() => {
        setActiveArray(
        // with the rhsOnly check, it will only display a value if it's "1"
        char && (!rhsOnly || char === "1")
            ? charToDigit[char]
            : charToDigit[blankChar]);
    }, [char]);
    return (
    // each digit is composed by creating lit/unlit segments in an "8" shape
    // or if rhsOnly is selected, use a "1" shape that displays blank or 1
    React.createElement("div", { className: "digit", style: style }, activeArray.map((active, index) => {
        let letter = letters[index];
        // if rhsOnly is enabled, don't draw any segments that aren't B or C (the chars to make a 1 on the RHS)
        if (rhsOnly && letter !== "B" && letter !== "C") {
            return null;
        }
        else {
            // if rhsOnly is enabled, transpose segment state from RHS to LHS because all segments reference top left
            // draw the value for B in F and value for C in E
            if (rhsOnly) {
                if (letter === "B") {
                    letter = "F";
                }
                else if (letter === "C") {
                    letter = "E";
                }
            }
            return (React.createElement(Segment, { key: letter, active: active === 1, size: height / 12.5, color: color, id: letter, skew: skew }));
        }
    })));
};
//# sourceMappingURL=Digit.js.map