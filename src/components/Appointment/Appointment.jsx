import React from "react";

const Appointment = ({
  customer: { firstName, lastName, phoneNumber, stylist, service, notes }
}) => (
  <div>
    <p data-testid="firstName">{firstName}</p>
    <p data-testid="lastName">{lastName}</p>
    <p data-testid="phoneNumber">{phoneNumber}</p>
    <p data-testid="stylist">{stylist}</p>
    <p data-testid="service">{service}</p>
    <p data-testid="notes">{notes}</p>
  </div>
);

export default Appointment;
