import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CustomerForm } from "./CustomerForm";
import { debug } from "webpack";

const expectToBeInputFieldOfTypeText = (formElement) => {
  expect(formElement.nodeName).not.toBeNull();
  expect(formElement.nodeName).toBe("INPUT");
  expect(formElement.type).toBe("text");
};

const expectToBeSelectBox = (formElement) => {
  expect(formElement.nodeName).not.toBeNull();
  expect(formElement.nodeName).toBe("SELECT");
};

const itRendersAsATextInput = (placeholderText) => {
  it("renders a text input", () => {
    const { getByPlaceholderText } = render(<CustomerForm />);
    const input = getByPlaceholderText(placeholderText);
    expectToBeInputFieldOfTypeText(input);
  });
};

const itRendersAsSelectBox = (placeholderText) => {
  it("renders a text input", () => {
    const { getByPlaceholderText } = render(<CustomerForm />);
    const select = getByPlaceholderText(placeholderText);
    expectToBeSelectBox(select);
  });
};

const itIncludesTheExistingValue = ({ fieldName, placeholderText }) => {
  it("includes the existing value", () => {
    const { getByPlaceholderText } = render(<CustomerForm {...{ [fieldName]: "value" }} />);
    const input = getByPlaceholderText(placeholderText);
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
    expect(onSubmitFn).toHaveBeenCalledWith(expect.objectContaining({ [fieldName]: "value" }));
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
    expect(onSubmitFn).toHaveBeenCalledWith(expect.objectContaining({ [fieldName]: "value2" }));
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
    itRendersAsATextInput("Write your first name");

    itIncludesTheExistingValue({
      fieldName: "firstName",
      placeholderText: "Write your first name",
    });

    itRendersALabelForIt({
      fieldName: "firstName",
      labelText: "First Name",
    });

    itSavesItWhenSubmitted({ fieldName: "firstName" });

    itSavesNewValueWhenChanged({
      fieldName: "firstName",
      placeholderText: "Write your first name",
    });
  });

  describe("last name field", () => {
    itRendersAsATextInput("Write your last name");

    itIncludesTheExistingValue({
      fieldName: "lastName",
      placeholderText: "Write your last name",
    });

    itRendersALabelForIt({
      fieldName: "lastName",
      labelText: "Last Name",
    });

    itSavesItWhenSubmitted({ fieldName: "lastName" });

    itSavesNewValueWhenChanged({
      fieldName: "lastName",
      placeholderText: "Write your last name",
    });
  });

  describe("phone field", () => {
    itRendersAsATextInput("Write your phone");

    itIncludesTheExistingValue({
      fieldName: "phone",
      placeholderText: "Write your phone",
    });

    itRendersALabelForIt({
      fieldName: "phone",
      labelText: "Phone",
    });

    itSavesItWhenSubmitted({ fieldName: "phone" });

    itSavesNewValueWhenChanged({
      fieldName: "phone",
      placeholderText: "Write your phone",
    });
  });

  describe("stylist field", () => {
    itRendersAsATextInput("Your stylist name");

    itIncludesTheExistingValue({
      fieldName: "stylist",
      placeholderText: "Your stylist name",
    });

    itRendersALabelForIt({
      fieldName: "stylist",
      labelText: "Stylist",
    });

    itSavesItWhenSubmitted({ fieldName: "stylist" });

    itSavesNewValueWhenChanged({
      fieldName: "stylist",
      placeholderText: "Your stylist name",
    });
  });

  describe("service field", () => {
    itRendersAsSelectBox("Service");

    it("initially has the 'Cut' value choosen", () => {
      const { getByPlaceholderText } = render(<CustomerForm />);
      const select = getByPlaceholderText("Service");
      expect(select.firstChild.value).toBe("Cut");
      expect(select.firstChild.selected).toBeTruthy();
      expect(select.firstChild.nodeName).toBe("OPTION");
    });

    it("lists all saloon services", () => {
      const selectableServices = ["Cut", "Blow-dry", "Cut & color", "Beard trim", "Cut & beard trim", "Extensions"];
      const { getByPlaceholderText } = render(<CustomerForm selectableServices={selectableServices} />);
      const select = getByPlaceholderText("Service");
      const options = Array.from(select.childNodes);

      const renderedOptions = options.map((node) => node.value);
      expect(renderedOptions).toEqual(selectableServices);
    });

    it("preselects the exiting value", () => {
      const selectableServices = ["Cut", "Blow-dry", "Cut & color", "Beard trim", "Cut & beard trim", "Extensions"];
      const { getByPlaceholderText } = render(
        <CustomerForm selectableServices={selectableServices} service={selectableServices[2]} />
      );
      const select = getByPlaceholderText("Service");
      expect(select.value).toBe(selectableServices[2]);
    });

    it("renders a label for it", () => {
      const { getByText } = render(<CustomerForm />);
      const label = getByText("Service");
      expect(label).not.toBeNull();
      expect(label.nodeName).toBe("LABEL");
    });

    it("saves the existing value when submitted", () => {
      const onSubmitFn = jest.fn();
      const { getByTestId } = render(<CustomerForm onSubmit={onSubmitFn} />);
      const customerForm = getByTestId("customer-form");
      fireEvent.submit(customerForm);
      expect(onSubmitFn).toHaveBeenCalled();
      expect(onSubmitFn).toHaveBeenCalledTimes(1);
      expect(onSubmitFn).toHaveBeenCalledWith({ service: "Cut" });
    });

    it("saves new value when changed", () => {
      const selectableServices = ["Cut", "Blow-dry", "Cut & color", "Beard trim", "Cut & beard trim", "Extensions"];
      const onSubmitFn = jest.fn();
      const { getByTestId, getByPlaceholderText } = render(
        <CustomerForm selectableServices={selectableServices} onSubmit={onSubmitFn} />
      );
      const select = getByPlaceholderText("Service");
      const customerForm = getByTestId("customer-form");
      fireEvent.change(select, { target: { value: selectableServices[3] } });
      fireEvent.submit(customerForm);
      expect(onSubmitFn).toHaveBeenCalled();
      expect(onSubmitFn).toHaveBeenCalledTimes(1);
      expect(onSubmitFn).toHaveBeenCalledWith({ service: selectableServices[3] });
    });
  });

  describe("notes field", () => {
    itRendersAsATextInput("Aditional notes");

    itIncludesTheExistingValue({
      fieldName: "notes",
      placeholderText: "Aditional notes",
    });

    itRendersALabelForIt({
      fieldName: "notes",
      labelText: "Notes",
    });

    itSavesItWhenSubmitted({ fieldName: "notes" });

    itSavesNewValueWhenChanged({
      fieldName: "notes",
      placeholderText: "Aditional notes",
    });
  });
});
