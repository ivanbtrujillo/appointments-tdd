import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CustomerForm } from "./CustomerForm";

const expectToBeInputFieldOfTypeText = (formElement) => {
  expect(formElement.nodeName).not.toBeNull();
  expect(formElement.nodeName).toBe("INPUT");
  expect(formElement.type).toBe("text");
};

const itRendersAsATextInput = (placeholderText) => {
  it("renders a text input", () => {
    const { getByPlaceholderText } = render(<CustomerForm />);
    const input = getByPlaceholderText(placeholderText);
    expectToBeInputFieldOfTypeText(input);
  });
};

const itIncludesTheExistingValue = ({ fieldName, placeholderText }) => {
  it("includes the existing value", () => {
    const { getByPlaceholderText } = render(<CustomerForm {...{ [fieldName]: "value" }} />);
    const input = getByPlaceholderText(placeholderText);
    expectToBeInputFieldOfTypeText(input);
    expect(input.value).toBe("value");
  });
};

const itRendersALabelForIt = ({ fieldName, labelText }) => {
  it("renders a label for it", () => {
    const { getByText, getByLabelText } = render(<CustomerForm {...{ [fieldName]: "value" }} />);

    const label = getByText(labelText);
    const input = getByLabelText(labelText);
    expect(label).not.toBeNull();
    expect(label.nodeName).toBe("LABEL");
    expectToBeInputFieldOfTypeText(input);
    expect(input.value).toBe("value");
  });
};

const itSavesItWhenSubmitted = ({ fieldName }) => {
  it("saves value when submitted", () => {
    const onSubmitFn = jest.fn();
    const { getByTestId } = render(<CustomerForm {...{ [fieldName]: "value" }} onSubmit={onSubmitFn} />);
    fireEvent.submit(getByTestId("customer-form"));
    expect(onSubmitFn).toHaveBeenCalled();
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
    expect(onSubmitFn).toHaveBeenCalledWith({ [fieldName]: "value" });
  });
};

const itSavesNewValueWhenChanged = ({ fieldName, placeholderText }) => {
  it("saves new value when changed", () => {
    const onSubmitFn = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <CustomerForm {...{ [fieldName]: "value" }} onSubmit={onSubmitFn} />
    );

    const lastNameInput = getByPlaceholderText(placeholderText);
    fireEvent.change(lastNameInput, { target: { value: "value2" } });

    fireEvent.submit(getByTestId("customer-form"));
    expect(onSubmitFn).toHaveBeenCalled();
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
    expect(onSubmitFn).toHaveBeenCalledWith({ [fieldName]: "value2" });
  });
};

describe("<CustomerForm />", () => {
  it("renders a form", () => {
    const { getByTestId } = render(<CustomerForm />);
    expect(getByTestId("customer-form").nodeName).toBe("FORM");
  });

  it("has a submit button", () => {
    const { getByText } = render(<CustomerForm />);
    expect(getByText("Add").nodeName).toBe("INPUT");
    expect(getByText("Add").type).toBe("submit");
  });

  describe("first name field", () => {
    itRendersAsATextInput("First name");

    itIncludesTheExistingValue({
      fieldName: "firstName",
      placeholderText: "First name",
    });

    itRendersALabelForIt({
      fieldName: "firstName",
      labelText: "First Name",
    });

    itSavesItWhenSubmitted({ fieldName: "firstName" });

    itSavesNewValueWhenChanged({
      fieldName: "firstName",
      placeholderText: "First name",
    });
  });

  describe("last name field", () => {
    itRendersAsATextInput("Last name");

    itIncludesTheExistingValue({
      fieldName: "lastName",
      placeholderText: "Last name",
    });

    itRendersALabelForIt({
      fieldName: "lastName",
      labelText: "Last Name",
    });

    itSavesItWhenSubmitted({ fieldName: "lastName" });

    itSavesNewValueWhenChanged({
      fieldName: "lastName",
      placeholderText: "Last name",
    });
  });

  describe("phone field", () => {
    itRendersAsATextInput("Phone");

    itIncludesTheExistingValue({
      fieldName: "phone",
      placeholderText: "Phone",
    });

    itRendersALabelForIt({
      fieldName: "phone",
      labelText: "Phone",
    });

    itSavesItWhenSubmitted({ fieldName: "phone" });

    itSavesNewValueWhenChanged({
      fieldName: "phone",
      placeholderText: "Phone",
    });
  });

  describe("stylist field", () => {
    itRendersAsATextInput("Stylist");

    itIncludesTheExistingValue({
      fieldName: "stylist",
      placeholderText: "Stylist",
    });

    itRendersALabelForIt({
      fieldName: "stylist",
      labelText: "Stylist",
    });

    itSavesItWhenSubmitted({ fieldName: "stylist" });

    itSavesNewValueWhenChanged({
      fieldName: "stylist",
      placeholderText: "Stylist",
    });
  });

  describe("service field", () => {
    itRendersAsATextInput("Service");

    itIncludesTheExistingValue({
      fieldName: "service",
      placeholderText: "Service",
    });

    itRendersALabelForIt({
      fieldName: "service",
      labelText: "Service",
    });

    itSavesItWhenSubmitted({ fieldName: "service" });

    itSavesNewValueWhenChanged({
      fieldName: "service",
      placeholderText: "Service",
    });
  });

  describe("notes field", () => {
    itRendersAsATextInput("Notes");

    itIncludesTheExistingValue({
      fieldName: "notes",
      placeholderText: "Notes",
    });

    itRendersALabelForIt({
      fieldName: "notes",
      labelText: "Notes",
    });

    itSavesItWhenSubmitted({ fieldName: "notes" });

    itSavesNewValueWhenChanged({
      fieldName: "notes",
      placeholderText: "Notes",
    });
  });
});
