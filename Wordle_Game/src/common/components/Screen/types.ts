import { ReactNode } from "react";

import { FlexboxProps, LayoutProps, SpaceProps } from "styled-system";

export interface HeaderProps {
  customHeaderTitle?: ReactNode | string;
  headerLeftButton?: ReactNode;
  headerLogo?: boolean;
  headerMode?: "white" | "default";
  headerBackTitle?: string;
  headerRightButton?: ReactNode;
  headerTintColor?: string;
  headerTitle?: ReactNode | string;
  onBackPress?: () => void;
}

export interface Props extends ContainerProps {
  mode?: "scroll" | "view";
  header?: HeaderProps;
}

interface ContainerProps extends SpaceProps, LayoutProps, FlexboxProps {
  backgroundColor?: string;
}
