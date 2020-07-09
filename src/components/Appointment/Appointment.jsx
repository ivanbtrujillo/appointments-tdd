import React from "react";

export const Appointment = ({
  customer: { firstName, lastName, phoneNumber, stylist, service, notes },
}) => (
  <div className="p-4 text-white">
    <p>{firstName}</p>
    <p>{lastName}</p>
    <p>{phoneNumber}</p>
    <p>{stylist}</p>
    <p>{service}</p>
    <p>{notes}</p>
  </div>
);
