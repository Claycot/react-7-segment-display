"use strict";
// a Digit is a collection of Segments, in lit/unlit states to represent a value
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digit = void 0;
const Segment_1 = __importDefault(require("./Segment"));
const react_1 = __importStar(require("react"));
const charToDigit_1 = __importDefault(require("../utils/charToDigit"));
// this array is used as a map to transform index to Segment letter
// Segments are [A, B, C, D, E, F, G] starting at the top-horizontal (A),
// letters progress clockwise, and middle-horizontal is last (G)
const letters = ["A", "B", "C", "D", "E", "F", "G"];
const Digit = ({ char = "-", blankChar = "-", color = "red", height = 250, skew = false, rhsOnly = false, }) => {
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
    const [activeArray, setActiveArray] = (0, react_1.useState)(
    // with the rhsOnly check, it will only display a value if it's "1"
    char && (!rhsOnly || char === "1")
        ? charToDigit_1.default[char]
        : charToDigit_1.default[blankChar]);
    (0, react_1.useEffect)(() => {
        setActiveArray(
        // with the rhsOnly check, it will only display a value if it's "1"
        char && (!rhsOnly || char === "1")
            ? charToDigit_1.default[char]
            : charToDigit_1.default[blankChar]);
    }, [char]);
    return (
    // each digit is composed by creating lit/unlit segments in an "8" shape
    // or if rhsOnly is selected, use a "1" shape that displays blank or 1
    react_1.default.createElement("div", { className: "digit", style: style }, activeArray.map((active, index) => {
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
            return (react_1.default.createElement(Segment_1.default, { key: letter, active: active === 1, size: height / 12.5, color: color, id: letter, skew: skew }));
        }
    })));
};
exports.Digit = Digit;
//# sourceMappingURL=Digit.js.map