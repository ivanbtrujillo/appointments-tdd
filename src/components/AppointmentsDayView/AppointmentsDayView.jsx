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
    <div id="appointmentsDayView">
      <h1> Appointments </h1>
      {appointments.length ? (
        <div>
          <ol>
            {appointments.map((appointment, i) => (
              <li key={appointment.startsAt}>
                <button type="button" onClick={() => setSelectedAppointment(i)}>
                  {dateToHHMM(appointment.startsAt)}
                </button>
              </li>
            ))}
          </ol>
          <h1>Selected appointment</h1>
          <Appointment {...appointments[selectedAppointment]} />
        </div>
      ) : (
        <p>There are no appointments scheduled for today.</p>
      )}
    </div>
  );
};

export default AppointmentsDayView;
