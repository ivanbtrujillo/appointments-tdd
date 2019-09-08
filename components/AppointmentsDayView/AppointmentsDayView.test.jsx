import React from "react";
import ReactDOM from "react-dom";

import AppointmentsDayView, { dateToHHMM } from "./AppointmentsDayView";

describe("Appoinments Day View", () => {
  let container;
  let customer;
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0)
    },
    {
      startsAt: today.setHours(13, 0)
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

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in a li element with HH:MM date format", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li")[0].textContent).toEqual("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toEqual("13:00");
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
