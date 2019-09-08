import React from "react";
import ReactDOM from "react-dom";

import Appointments from "./Appointments";

describe("Appointment", () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = component => ReactDOM.render(component, container);

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    render(<Appointments customer={customer} />);
    expect(container.textContent).toEqual("Ashley");
  });

  it("renders another customer first name", () => {
    customer = { firstName: "Jordan" };
    render(<Appointments customer={customer} />);
    expect(container.textContent).toEqual("Jordan");
  });
});
