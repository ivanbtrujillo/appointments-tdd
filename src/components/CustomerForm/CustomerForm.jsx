import React, { useState } from "react";

const Field = ({ id, label, placeholder, value, onChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input id={id} placeholder={placeholder} type="text" value={value} onChange={onChange}></input>
  </>
);

export const CustomerForm = ({ firstName, lastName, phone, stylist, service, notes, onSubmit }) => {
  const [customer, setCustomer] = useState({
    firstName,
    lastName,
    phone,
    stylist,
    service,
    notes,
  });

  const handleOnSubmit = () => onSubmit(customer);

  const handleOnFieldChange = ({ e, fieldName }) => {
    setCustomer({ ...customer, [fieldName]: e.target.value });
  };

  return (
    <form data-testid="customer-form" onSubmit={handleOnSubmit}>
      <Field
        id="firstName"
        label="First Name"
        placeholder="First name"
        value={firstName}
        onChange={(e) => handleOnFieldChange({ fieldName: "firstName", e })}
      />

      <Field
        id="lastName"
        label="Last Name"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => handleOnFieldChange({ fieldName: "lastName", e })}
      />
      <Field
        id="phone"
        label="Phone"
        placeholder="Phone"
        value={phone}
        onChange={(e) => handleOnFieldChange({ fieldName: "phone", e })}
      />

      <Field
        id="stylist"
        label="Stylist"
        placeholder="Stylist"
        value={stylist}
        onChange={(e) => handleOnFieldChange({ fieldName: "stylist", e })}
      />

      <Field
        id="service"
        label="Service"
        placeholder="Service"
        value={service}
        onChange={(e) => handleOnFieldChange({ fieldName: "service", e })}
      />

      <Field
        id="notes"
        label="Notes"
        placeholder="Notes"
        value={notes}
        onChange={(e) => handleOnFieldChange({ fieldName: "notes", e })}
      />
      <input data-testid="submit" type="submit" value="Add" />
    </form>
  );
};
