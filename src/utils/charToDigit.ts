// this maps the on/off state of each segment of a digit
// segments are [A, B, C, D, E, F, G] starting at the top-horizontal (A),
// letters progress clockwise, and middle-horizontal is last (G)

const charToDigit = {
    "0": [1, 1, 1, 1, 1, 1, 0],
    "1": [0, 1, 1, 0, 0, 0, 0],
    "2": [1, 1, 0, 1, 1, 0, 1],
    "3": [1, 1, 1, 1, 0, 0, 1],
    "4": [0, 1, 1, 0, 0, 1, 1],
    "5": [1, 0, 1, 1, 0, 1, 1],
    "6": [1, 0, 1, 1, 1, 1, 1],
    "7": [1, 1, 1, 0, 0, 0, 0],
    "8": [1, 1, 1, 1, 1, 1, 1],
    "9": [1, 1, 1, 1, 0, 1, 1],
    "@": [1, 1, 1, 1, 1, 0, 1],
    a: [1, 1, 1, 0, 1, 1, 1],
    b: [0, 0, 1, 1, 1, 1, 1],
    c: [1, 0, 0, 1, 1, 1, 0],
    d: [0, 1, 1, 1, 1, 0, 1],
    e: [1, 0, 0, 1, 1, 1, 1],
    f: [1, 0, 0, 0, 1, 1, 1],
    r: [0, 0, 0, 0, 1, 0, 1],
    "-": [0, 0, 0, 0, 0, 0, 1],
    " ": [0, 0, 0, 0, 0, 0, 0],
} as { [key: string]: number[] };

export default charToDigit;
