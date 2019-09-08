import React from "react";

const Appointment = ({
  customer: { firstName, lastName, phoneNumber, stylist, service, notes }
}) => (
  <div>
    <p>{firstName}</p>
    <p>{lastName}</p>
    <p>{phoneNumber}</p>
    <p>{stylist}</p>
    <p>{service}</p>
    <p>{notes}</p>
  </div>
);

export default Appointment;
