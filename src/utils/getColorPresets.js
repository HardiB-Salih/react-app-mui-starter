// theme/colorPresets.js

import palette from "../theme/palette";

export const colorPresets = [
  // DEFAULT
  {
    name: "default",
    lighter: "#EBF6FF",
    light: "#B3D4FF",
    main: "#4D9CFF",
    dark: "#1A73E8",
    darker: "#004D99",
    contrastText: "#fff",
  },
  // PURPLE
  {
    name: "purple",
    lighter: "#EBD6FD",
    light: "#B985F4",
    main: "#7635dc",
    dark: "#431A9E",
    darker: "#200A69",
    contrastText: "#fff",
  },
  // CYAN
  {
    name: "cyan",
    lighter: "#D1FFFC",
    light: "#76F2FF",
    main: "#1CCAFF",
    dark: "#0E77B7",
    darker: "#053D7A",
    contrastText: palette.light.grey[800],
  },
  // BLUE
  {
    name: "blue",
    lighter: "#D1E9FC",
    light: "#76B0F1",
    main: "#2065D1",
    dark: "#103996",
    darker: "#061B64",
    contrastText: "#fff",
  },
  // ORANGE
  {
    name: "orange",
    lighter: "#FEF4D4",
    light: "#FED680",
    main: "#fda92d",
    dark: "#B66816",
    darker: "#793908",
    contrastText: palette.light.grey[800],
  },
  // RED
  {
    name: "red",
    lighter: "#FFE3D5",
    light: "#FFC1AC",
    main: "#FF3030",
    dark: "#B71833",
    darker: "#7A0930",
    contrastText: "#fff",
  },
  // GREEN
  {
    name: "green",
    lighter: "#E1FFD4",
    light: "#8FEA8B",
    main: "#2ACD3F",
    dark: "#1D8F32",
    darker: "#0E4F18",
    contrastText: "#212121",
  },
  // YELLOW
  {
    name: "yellow",
    lighter: "#FFF7D9",
    light: "#FFE77C",
    main: "#FFC400",
    dark: "#B28100",
    darker: "#7A4F00",
    contrastText: "#212121",
  },
  // TEAL
  {
    name: "teal",
    lighter: "#D9FFF1",
    light: "#7FFFD4",
    main: "#00E0A3",
    dark: "#00B38F",
    darker: "#006D5B",
    contrastText: "#212121",
  },
];

export const defaultPreset = colorPresets[0];
export const purplePreset = colorPresets[1];
export const cyanPreset = colorPresets[2];
export const bluePreset = colorPresets[3];
export const orangePreset = colorPresets[4];
export const redPreset = colorPresets[5];
export const greenPreset = colorPresets[6];
export const yellowPreset = colorPresets[7];
export const tealPreset = colorPresets[8];

export default function getColorPresets(presetsKey) {
  return {
    purple: purplePreset,
    cyan: cyanPreset,
    blue: bluePreset,
    orange: orangePreset,
    red: redPreset,
    green: greenPreset,
    yellow: yellowPreset,
    teal: tealPreset,
    default: defaultPreset,
  }[presetsKey];
}
