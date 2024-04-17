import React from "react";
type DisplayType = {
    count: number;
    height: number;
    value: any;
    color: string;
    backgroundColor?: string;
    skew: boolean;
    paddingInner: string;
    paddingOuter: string;
    blankChar: string;
    leadingZeroes: boolean;
    rhsOnlyFirstDigit: boolean;
};
export declare const Display: ({ count, height, value, color, backgroundColor, skew, paddingInner, paddingOuter, blankChar, leadingZeroes, rhsOnlyFirstDigit, }: DisplayType) => React.JSX.Element;
export {};
