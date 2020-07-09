import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Appointment from "./Appointment";

describe("Appointment", () => {
  const customer = {
    firstName: "Ashley",
    lastName: "Hamilton",
    phoneNumber: 666777888,
    stylist: "Ana White",
    service: "hair cut",
    notes: "will arrive 10 min later",
  };

  it("renders the customer firstName", () => {
    const { getByText } = render(<Appointment customer={customer} />);
    expect(getByText("Ashley")).toBeInTheDocument();
  });

  it("renders customer lastName", () => {
    const { getByText } = render(<Appointment customer={customer} />);
    expect(getByText("Hamilton")).toBeInTheDocument();
  });

  it("renders phone number", () => {
    const { getByText } = render(<Appointment customer={customer} />);
    expect(getByText("666777888")).toBeInTheDocument();
  });

  it("renders stylist", () => {
    const { getByText } = render(<Appointment customer={customer} />);
    expect(getByText("Ana White")).toBeInTheDocument();
  });

  it("renders service", () => {
    const { getByText } = render(<Appointment customer={customer} />);
    expect(getByText("hair cut")).toBeInTheDocument();
  });

  it("renders notes", () => {
    const { getByText } = render(<Appointment customer={customer} />);
    expect(getByText("will arrive 10 min later")).toBeInTheDocument();
  });
});
