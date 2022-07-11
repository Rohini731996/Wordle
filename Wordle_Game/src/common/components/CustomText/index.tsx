import React from "react";

import { Container } from "./styles";
import { Props, TYPOGRAPHY } from "./types";

export const CustomText: React.FC<Props> = ({
  type = "body",
  children,
  ...props
}) => (
  <Container {...TYPOGRAPHY[type]} suppressHighlighting {...props}>
    {children}
  </Container>
);
