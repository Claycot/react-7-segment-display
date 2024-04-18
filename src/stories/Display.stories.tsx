import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Display } from "../components/Display";

export default {
    title: "Example/Display",
    component: Display,
    argTypes: {
        color: { control: "color" },
        height: { control: "number" },
        value: {
            control: "text",
        },
        count: {
            control: "number",
        },
        backgroundColor: {
            control: "color",
        },
        skew: { control: "boolean" },
        paddingInner: { control: "text" },
        paddingOuter: { control: "text" },
        blankChar: {
            control: "select",
            options: [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "@",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "r",
                "-",
                " ",
            ],
        },
        leadingZeroes: { control: "boolean" },
        rhsOnlyFirstDigit: { control: "boolean" },
    },
} as ComponentMeta<typeof Display>;

const Template: ComponentStory<typeof Display> = (args) => (
    <Display {...args} />
);

export const Default = Template.bind({});
Default.args = {
    color: "red",
    height: 250,
    value: "0",
    count: 2,
    backgroundColor: "black",
    skew: false,
    paddingInner: "20px",
    paddingOuter: "20px",
    blankChar: "-",
    leadingZeroes: true,
    rhsOnlyFirstDigit: false,
};
