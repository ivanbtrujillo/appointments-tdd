import React from "react";

export const dateToHHMM = date => {
  if (!date) return `00:00`;
  const [h, m] = new Date(date).toTimeString().split(":");
  return `${h}:${m}`;
};

const AppointmentsDayView = ({ appointments }) => {
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map(appointment => (
          <li key={appointment.startsAt}>{dateToHHMM(appointment.startsAt)}</li>
        ))}
      </ol>
    </div>
  );
};

export default AppointmentsDayView;
