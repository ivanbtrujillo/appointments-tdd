import React, { useState } from "react";

const FormElement = ({ children }) => <div className="my-2 flex flex-col">{children}</div>;

const Field = ({ id, label, placeholder, value, onChange }) => (
  <FormElement>
    <label htmlFor={id}>{label}</label>
    <input
      className="border border-1 border-gray-600 rounded-sm p-1 mt-1 h-8"
      id={id}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </FormElement>
);

const Dropdown = ({ id, label, name, selected, options, placeholder, onChange }) => (
  <FormElement>
    <label htmlFor={id}>{label}</label>
    <select
      className="border border-1 border-gray-600 rounded-sm p-1 mt-1 h-8"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={selected}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </FormElement>
);

export const CustomerForm = ({ firstName, lastName, phone, stylist, service, notes, selectableServices, onSubmit }) => {
  const [customer, setCustomer] = useState({
    firstName,
    lastName,
    phone,
    stylist,
    service: selectableServices[0],
    notes,
  });

  const handleOnSubmit = () => onSubmit(customer);

  const handleOnFieldChange = ({ e, fieldName }) => {
    setCustomer({ ...customer, [fieldName]: e.target.value });
  };

  return (
    <form data-testid="customer-form" className="flex flex-col" onSubmit={handleOnSubmit}>
      <Field
        id="firstName"
        label="First Name"
        placeholder="Write your first name"
        value={firstName}
        onChange={(e) => handleOnFieldChange({ fieldName: "firstName", e })}
      />

      <Field
        id="lastName"
        label="Last Name"
        placeholder="Write your last name"
        value={lastName}
        onChange={(e) => handleOnFieldChange({ fieldName: "lastName", e })}
      />
      <Field
        id="phone"
        label="Phone"
        placeholder="Write your phone"
        value={phone}
        onChange={(e) => handleOnFieldChange({ fieldName: "phone", e })}
      />

      <Field
        id="stylist"
        label="Stylist"
        placeholder="Your stylist name"
        value={stylist}
        onChange={(e) => handleOnFieldChange({ fieldName: "stylist", e })}
      />

      <Dropdown
        id="service"
        label="Service"
        name="service"
        placeholder="Service"
        selected={service}
        options={selectableServices}
        onChange={(e) => handleOnFieldChange({ fieldName: "service", e })}
      />

      <Field
        id="notes"
        label="Notes"
        placeholder="Aditional notes"
        value={notes}
        onChange={(e) => handleOnFieldChange({ fieldName: "notes", e })}
      />
      <input data-testid="submit" type="submit" value="Add" />
    </form>
  );
};

CustomerForm.defaultProps = {
  selectableServices: ["Cut", "Blow-dry", "Cut & color", "Beard trim", "Cut & beard trim", "Extensions"],
};
