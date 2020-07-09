import React, { useState } from "react";
import { Appointment } from "../Appointment/Appointment.jsx";

export const dateToHHMM = date => {
  if (!date) return `00:00`;
  const [h, m] = new Date(date).toTimeString().split(":");
  return `${h}:${m}`;
};

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div data-testid="appointmentsDayView" className="h-screen p-4">
      {appointments.length ? (
        <div className="flex flex-row h-full">
          <div className="flex flex-col w-1/6 bg-purple-400">
            <h1
              data-testid="title"
              className="font-bold text-white text-xl p-4"
            >
              Citas de hoy
            </h1>
            <ol data-testid="appointments-list">
              {appointments.map((appointment, i) => (
                <li
                  key={appointment.startsAt}
                  data-testid="appointment-list-item"
                  className={`m-4   text-white ${
                    i === selectedAppointment ? " border-b border-white" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="w-full text-left outline-none"
                    onClick={() => setSelectedAppointment(i)}
                  >
                    {dateToHHMM(appointment.startsAt)}
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="h-full flex-1  bg-blue-500">
            <h1 className="font-bold text-white text-xl p-4">
              Cita seleccionada
            </h1>
            <div data-testid="selected-appointment">
              <Appointment {...appointments[selectedAppointment]} />
            </div>
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
