import { PropsWithChildren } from "react";
import { TextProps } from "react-native";

import {
  SpaceProps,
  LayoutProps,
  FontSizeProps,
  LineHeightProps,
  ColorProps,
  TextAlignProps,
  FlexboxProps,
  SizeProps,
} from "styled-system";

import { Colors } from "common/themes";

export type TypeScale =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h5"
  | "h5"
  | "h6"
  | "body"
  | "caption";

export type TypographyProps = {
  color: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
};
type Typography = {
  [type in TypeScale]?: TypographyProps;
};

export const TYPOGRAPHY: Typography = {
  h1: {
    color: Colors.black,
    fontSize: "36px",
    lineHeight: "42px",
    fontWeight: "700",
  },
  h2: {
    color: Colors.black,
    fontSize: "30px",
    lineHeight: "36px",
    fontWeight: "700",
  },
  h3: {
    color: Colors.black,
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "600",
  },
  h4: {
    color: Colors.black,
    fontSize: "22px",
    lineHeight: "26px",
    fontWeight: "600",
  },
  h5: {
    color: Colors.black,
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: "600",
  },
  h6: {
    color: Colors.black,
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "600",
  },
  body: {
    color: Colors.body,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
  },
  caption: {
    color: Colors.black,
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "400",
  },
};

interface Extend
  extends SpaceProps,
    LayoutProps,
    FontSizeProps,
    LineHeightProps,
    TextAlignProps {}
export interface CustomTextStyle
  extends SpaceProps,
    LayoutProps,
    FontSizeProps,
    LineHeightProps,
    TextAlignProps,
    FlexboxProps,
    SizeProps,
    ColorProps {
  type?: TypeScale;
  fontWeight?: string;
  underline?: boolean;
  underlineColor?: string;
}

export type Props = PropsWithChildren<CustomTextStyle & TextProps>;
