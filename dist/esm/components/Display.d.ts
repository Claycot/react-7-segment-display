declare type DisplayType = {
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
};
export declare const Display: ({ count, height, value, color, backgroundColor, skew, paddingInner, paddingOuter, blankChar, leadingZeroes, }: DisplayType) => JSX.Element;
export {};
