import Segment from "./Segment";
import React, { useEffect, useState } from "react";

import charToDigit from "../utils/charToDigit";

const letters = ["A", "B", "C", "D", "E", "F", "G"] as const;

type DigitType = {
    char: string;
    blankChar: string;
    color: string;
    height: number;
    skew: boolean;
    rhsOnly: boolean;
};

export const Digit = ({
    char = "-",
    blankChar = "-",
    color = "red",
    height = 250,
    skew = false,
    rhsOnly = false,
}: DigitType) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
        padding: skew ? "8px 0px" : "0",
        boxSizing: "border-box",
    } as React.CSSProperties;

    const [activeArray, setActiveArray] = useState(
        char ? charToDigit[char] : charToDigit[blankChar]
    );

    useEffect(() => {
        setActiveArray(char ? charToDigit[char] : charToDigit[blankChar]);
    }, [char]);

    return (
        <div className="digit" style={style}>
            {activeArray.map((active, index) => {
                const letter = letters[index];
                // if rhsOnly is enabled, hide any segments that aren't B or C (the chars to make a 1 on the right)
                if (rhsOnly && letter !== "B" && letter !== "C") {
                    return null;
                } else {
                    return (
                        <Segment
                            key={letter}
                            active={active === 1}
                            size={height / 12.5}
                            color={color}
                            id={letter}
                            skew={skew}
                        />
                    );
                }
            })}
        </div>
    );
};
