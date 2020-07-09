import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppointmentsDayView, dateToHHMM } from "./AppointmentsDayView";

describe("Appoinments Day View", () => {
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: { firstName: "Ashley" },
    },
    {
      startsAt: today.setHours(13, 0),
      customer: { firstName: "Jordan" },
    },
  ];

  it("renders a div with the right id", () => {
    const { getByTestId } = render(<AppointmentsDayView appointments={[]} />);
    expect(getByTestId("appointmentsDayView").nodeName).toBe("DIV");
    expect(getByTestId("appointmentsDayView")).not.toBeNull();
  });

  it("renders a message if there are not appointments", () => {
    const { getByText } = render(<AppointmentsDayView appointments={[]} />);
    expect(
      getByText("There are no appointments scheduled for today.")
    ).toBeInTheDocument();
  });

  it("renders multiple appointments in an ol element", () => {
    const { getByTestId } = render(
      <AppointmentsDayView appointments={appointments} />
    );
    expect(getByTestId("appointments-list").nodeName).toBe("OL");
    expect(getByTestId("appointments-list")).not.toBeNull();
    expect(getByTestId("appointments-list").children).toHaveLength(2);
  });

  it("renders each appointment in a li element with HH:MM date format", () => {
    const { queryAllByTestId } = render(
      <AppointmentsDayView appointments={appointments} />
    );

    expect(queryAllByTestId("appointment-list-item")[0].nodeName).toBe("LI");
    expect(queryAllByTestId("appointment-list-item")[0]).toHaveTextContent(
      "12:00"
    );
    expect(queryAllByTestId("appointment-list-item")[1].nodeName).toBe("LI");
    expect(queryAllByTestId("appointment-list-item")[1]).toHaveTextContent(
      "13:00"
    );
  });

  it("selects the first appointment by default", () => {
    const { getByTestId } = render(
      <AppointmentsDayView appointments={appointments} />
    );
    expect(getByTestId("selected-appointment")).toHaveTextContent("Ashley");
  });

  it("has a button element in each li", () => {
    const { queryAllByTestId } = render(
      <AppointmentsDayView appointments={appointments} />
    );
    expect(queryAllByTestId("appointment-list-item")).toHaveLength(2);
    expect(queryAllByTestId("appointment-list-item")[0].nodeName).toBe("LI");
    expect(queryAllByTestId("appointment-list-item")[1].nodeName).toBe("LI");
    expect(
      queryAllByTestId("appointment-list-item")[0].children[0].nodeName
    ).toEqual("BUTTON");
    expect(
      queryAllByTestId("appointment-list-item")[1].children[0].nodeName
    ).toEqual("BUTTON");
  });

  it("renders another appointment when selected", () => {
    const { queryAllByTestId, getByTestId } = render(
      <AppointmentsDayView appointments={appointments} />
    );
    expect(getByTestId("selected-appointment")).toHaveTextContent("Ashley");
    const button = queryAllByTestId("appointment-list-item")[1].children[0];
    fireEvent.click(button);
    expect(getByTestId("selected-appointment")).toHaveTextContent("Jordan");
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
