import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import AppointmentsDayView, { dateToHHMM } from "./AppointmentsDayView";

describe("Appoinments Day View", () => {
  let container;
  let customer;
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: { firstName: "Ashley" }
    },
    {
      startsAt: today.setHours(13, 0),
      customer: { firstName: "Jordan" }
    }
  ];

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = component => ReactDOM.render(component, container);

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders a message if there are not appointments", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toEqual(
      "There are no appointments scheduled for today."
    );
  });

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in a li element with HH:MM date format", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li")[0].textContent).toMatch("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toMatch("13:00");
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("has a button element in each li", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch("Jordan");
  });
});

describe("Date to HH:MM", () => {
  it("should convert a date to HH:MM format", () => {
    const result = dateToHHMM(new Date().setHours(14, 0));
    expect(result).toEqual("14:00");
  });

  it("should work with minutes", () => {
    const result = dateToHHMM(new Date().setHours(15, 35));
    expect(result).toEqual("15:35");
  });

  it("should return 00:00 if no date is received", () => {
    const result = dateToHHMM();
    expect(result).toEqual("00:00");
  });
});
