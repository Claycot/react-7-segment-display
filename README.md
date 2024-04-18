# React 7-Segment Display

A React component that simulates a 7-segment display.

![Display demo](./assets/Display.gif)

## Usage

### Installation

`npm install react-7-segment-display`

### Adding the component to your project

```jsx
import { Display } from "react-7-segment-display";

const App = () => <Display value="77" />;

export default App;
```

## Props

| Name              | Decription                                                 | Type      | Default value |
| ----------------- | ---------------------------------------------------------- | --------- | ------------- |
| value             | Value displayed on the display (in decimal or hexadecimal) | `any`     | `null`        |
| color             | Color of the display segments when turned on               | `string`  | `"red"`       |
| height            | Total height of the display digits, in pixels              | `number`  | `250`         |
| count             | Amount of digits on the display                            | `number`  | `2`           |
| backgroundColor   | Color of the background (defaults to transparent)          | `string?` | n/a           |
| skew              | Whether the digits are skewed or not                       | `boolean` | `false`       |
| paddingInner      | Padding to use around the digits                           | `string`  | `"20px"`      |
| paddingOuter      | Padding to use around the display                          | `string`  | `"20px"`      |
| blankChar         | Character to display in each digit when no value provided  | `string`  | `"-"`         |
| leadingZeroes     | Enable leading zeroes for short values                     | `boolean` | `true`        |
| rhsOnlyFirstDigit | Draw the first digit as a blank or 1 only                  | `boolean` | `false`       |

### Valid values for `value`

You can dislay a number in decimal or hexadecimal, giving its value by a number or a string.

![Display demo](./assets/Display_hex.gif)

### Skew prop

`skew` is a boolean that determines whether the digits are skewed or not. You can use it to make the display look more like a real 7-segment display.

![Display demo](./assets/Display_skew.gif)

## License

MIT License
