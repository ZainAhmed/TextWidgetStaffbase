import React from "react";
import { screen, render } from "@testing-library/react";

import { TextWidget } from "./text-widget";

describe("TextWidget", () => {
  it("should render the component", () => {
    render(<TextWidget contentLanguage="en_US" message="World" />);

    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
