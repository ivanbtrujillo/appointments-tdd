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
    notes: "will arrive 10 min later"
  };

  it("renders the customer firstName", () => {
    const { getByTestId } = render(<Appointment customer={customer} />);
    expect(getByTestId("firstName")).toHaveTextContent("Ashley");
  });

  it("renders customer lastName", () => {
    const { getByTestId } = render(<Appointment customer={customer} />);
    expect(getByTestId("lastName")).toHaveTextContent("Hamilton");
  });

  it("renders phone number", () => {
    const { getByTestId } = render(<Appointment customer={customer} />);
    expect(getByTestId("phoneNumber")).toHaveTextContent("666777888");
  });

  it("renders stylist", () => {
    const { getByTestId } = render(<Appointment customer={customer} />);
    expect(getByTestId("stylist")).toHaveTextContent("Ana White");
  });

  it("renders service", () => {
    const { getByTestId } = render(<Appointment customer={customer} />);
    expect(getByTestId("service")).toHaveTextContent("hair cut");
  });

  it("renders notes", () => {
    const { getByTestId } = render(<Appointment customer={customer} />);
    expect(getByTestId("notes")).toHaveTextContent("will arrive 10 min later");
  });
});
