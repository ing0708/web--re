export type ColorKey = "amber" | "blue" | "green" | "red";

export interface Colorway {
  key: ColorKey;
  /** English display name */
  name: string;
  /** Thai display name */
  nameTh: string;
  /** Catalogue label printed on the unit */
  catalogue: string;
  /** Hex used for the neon glow / accent */
  glow: string;
  /** Product image (faithful vector rendition; drop a real photo at the same path to swap) */
  image: string;
  /** Wavelength-style flavour metadata for the hover readout */
  wavelength: string;
  /** Primary application context */
  use: string;
}

export const colorways: Colorway[] = [
  {
    key: "amber",
    name: "Amber",
    nameTh: "เหลืองอำพัน",
    catalogue: "No.2",
    glow: "#FFB732",
    image: "/light-amber-left.png.jpg",
    wavelength: "590 nm",
    use: "Roadworks · Forklift · Loading bays",
  },
  {
    key: "blue",
    name: "Blue",
    nameTh: "น้ำเงิน",
    catalogue: "No.1",
    glow: "#4E78F0",
    image: "/light-blue-left.png.jpg",
    wavelength: "470 nm",
    use: "Security · Access control · Patrol",
  },
  {
    key: "green",
    name: "Green",
    nameTh: "เขียว",
    catalogue: "No.1",
    glow: "#18C9A6",
    image: "/light-green-left.png.jpg",
    wavelength: "525 nm",
    use: "Clear-to-proceed · Process OK",
  },
  {
    key: "red",
    name: "Red",
    nameTh: "แดง",
    catalogue: "No.1",
    glow: "#FF4D4D",
    image: "/light-red-left.png.jpg",
    wavelength: "630 nm",
    use: "Emergency stop · Fire · Critical fault",
  },
];

export interface SizeSpec {
  model: string;
  /** Diameter in mm */
  diameter: string;
  /** Overall height in mm */
  height: string;
  /** LED count */
  leds: string;
  /** Lumens / intensity tier */
  output: string;
}

/** Four sizes — shared technical envelope of the line. */
export const sizes: SizeSpec[] = [
  { model: "LTE-1101J", diameter: "Ø 95 mm", height: "130 mm", leds: "18 LED", output: "Tier I · 1,200 cd" },
  { model: "LTE-5071", diameter: "Ø 110 mm", height: "155 mm", leds: "24 LED", output: "Tier II · 1,800 cd" },
  { model: "LTE-5072", diameter: "Ø 125 mm", height: "180 mm", leds: "30 LED", output: "Tier III · 2,600 cd" },
  { model: "LTE-1121", diameter: "Ø 140 mm", height: "210 mm", leds: "36 LED", output: "Tier IV · 3,400 cd" },
];

/** Shared electrical / build specification. */
export const coreSpecs: { label: string; value: string }[] = [
  { label: "Voltage", value: "AC 220 V" },
  { label: "Bulb", value: "LED Running" },
  { label: "Mode", value: "Rotary sweep" },
  { label: "Frequency", value: "120 flash / min" },
  { label: "Housing", value: "ABS + chrome ring" },
  { label: "Ingress", value: "IP44 weather-resist" },
  { label: "Mount", value: "Twin-stud base" },
  { label: "Lifespan", value: "50,000 hrs" },
];

export const LINE_URL = "https://line.me/R/ti/p/@bigoneelectric";
