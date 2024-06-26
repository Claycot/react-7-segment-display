// this is the entry point for the component!
// it will create a Display, which is a collection of Digits, which are made up of lit/unlit Segments

import { getErrorDigits } from "../utils/error";
import { Digit } from "./Digit";
import React, { useEffect, useState } from "react";

type DisplayType = {
    count: number; // number of digits to include in the display. Default: 2
    height: number; // height of each digit in pixels. Default: 250
    value: any; // value to display. Default: null
    color: string; // color to use for lit segments (unlit segments will be similar but dimmer). Default: "red"
    backgroundColor?: string; // color to use for display background. Default: undefined ("transparent")
    skew: boolean; // option to skew digits to the right slightly, an authentic style. Default: false
    paddingInner: string; // padding to use around the digits. Default: "20px"
    paddingOuter: string; // padding to use around the display. Default: "20px"
    blankChar: string; // character to illuminate in each digit when no value is provided. Default: "-"
    leadingZeroes: boolean; // option to enable leading zeroes for when a value has fewer digits than the provided display count. Default: true
    rhsOnlyFirstDigit: boolean; // option to draw the first digit as the right-hand side of a digit, capable of showing blank or 1. Default: false
};

export const Display = ({
    count = 2,
    height = 250,
    value = null,
    color = "red",
    backgroundColor,
    skew = false,
    paddingInner = "20px",
    paddingOuter = "20px",
    blankChar = "-",
    leadingZeroes = true,
    rhsOnlyFirstDigit = false,
}: DisplayType) => {
    const [digits, setDigits] = useState([]);

    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
        padding: paddingInner,
    } as React.CSSProperties;

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
    } as React.CSSProperties;

    // set the display's digits when either the number of digits or the display value changes
    useEffect(() => {
        // split an incoming value into an array of chars to display
        let newDigits = value && value.toString().split("");
        let errState: boolean = false;

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
        if (
            !errState &&
            newDigits !== null &&
            rhsOnlyFirstDigit &&
            newDigits[0] !== " " &&
            newDigits[0] !== "1"
        ) {
            errState = true;
        }

        // for each digit in the display, set the values!
        setDigits(
            errState ? getErrorDigits(count, rhsOnlyFirstDigit) : newDigits
        );
    }, [count, value]);

    return (
        <div className="display" style={displayStyle}>
            <div className="display-digits" style={style}>
                {digits
                    ? digits.map((digit, index) => {
                          // if the digits array is present, create each one as an elem
                          return (
                              <Digit
                                  key={index}
                                  char={digit}
                                  blankChar={blankChar}
                                  height={height}
                                  color={color}
                                  skew={skew}
                                  rhsOnly={rhsOnlyFirstDigit && index === 0}
                              />
                          );
                      })
                    : Array.from(Array(count).keys()).map((index) => {
                          // if the digits array is not present, create each digit with a blank char
                          return (
                              <Digit
                                  key={index}
                                  char={blankChar}
                                  blankChar={blankChar}
                                  height={height}
                                  color={color}
                                  skew={skew}
                                  rhsOnly={rhsOnlyFirstDigit && index === 0}
                              />
                          );
                      })}
            </div>
        </div>
    );
};
