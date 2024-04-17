import React from "react";
type DigitType = {
    char: string;
    blankChar: string;
    color: string;
    height: number;
    skew: boolean;
    rhsOnly: boolean;
};
export declare const Digit: ({ char, blankChar, color, height, skew, rhsOnly, }: DigitType) => React.JSX.Element;
export {};
