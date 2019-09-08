import React, { useState } from "react";
import Appointment from "../Appointment/Appointment.jsx";

export const dateToHHMM = date => {
  if (!date) return `00:00`;
  const [h, m] = new Date(date).toTimeString().split(":");
  return `${h}:${m}`;
};

const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div data-testid="appointmentsDayView">
      <h1 data-testid="title"> Appointments </h1>
      {appointments.length ? (
        <div>
          <ol data-testid="appointments-list">
            {appointments.map((appointment, i) => (
              <li
                key={appointment.startsAt}
                data-testid="appointment-list-item"
              >
                <button type="button" onClick={() => setSelectedAppointment(i)}>
                  {dateToHHMM(appointment.startsAt)}
                </button>
              </li>
            ))}
          </ol>
          <h1>Selected appointment</h1>
          <div data-testid="selected-appointment">
            <Appointment {...appointments[selectedAppointment]} />
          </div>
        </div>
      ) : (
        <p data-testid="no-appointments-message">
          There are no appointments scheduled for today.
        </p>
      )}
    </div>
  );
};

export default AppointmentsDayView;
