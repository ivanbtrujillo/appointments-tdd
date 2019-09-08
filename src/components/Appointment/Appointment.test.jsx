import React from "react";
import ReactDOM from "react-dom";

import Appointment from "./Appointment";

describe("Appointment", () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = component => ReactDOM.render(component, container);
  customer = {
    firstName: "Ashley",
    lastName: "Hamilton",
    phoneNumber: 666777888,
    stylist: "Ana White",
    service: "hair cut",
    notes: "will arrive 10 min later"
  };

  it("renders the customer firstName", () => {
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("renders customer lastName", () => {
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Hamilton");
  });

  it("renders phone number", () => {
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("666777888");
  });

  it("renders stylist", () => {
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Ana White");
  });

  it("renders service", () => {
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("hair cut");
  });

  it("renders notes", () => {
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("will arrive 10 min later");
  });
});
