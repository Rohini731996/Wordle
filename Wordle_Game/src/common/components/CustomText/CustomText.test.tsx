import React from "react";

import { render } from "@testing-library/react-native";

import { CustomText } from "./index";

describe("<CustomText /> behaves correctly", () => {
  it("should render correctly", () => {
    const { getByText } = render(<CustomText>Text</CustomText>);
    const component = getByText("Text");
    expect(component).not.toBeNull();
  });
});
