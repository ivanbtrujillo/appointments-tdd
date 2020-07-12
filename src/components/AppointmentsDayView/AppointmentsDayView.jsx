import React, { useState } from "react";
import { Appointment } from "../Appointment/Appointment.jsx";
import { CustomerForm } from "../CustomerForm/CustomerForm.jsx";

export const dateToHHMM = (date) => {
  if (!date) return `00:00`;
  const [h, m] = new Date(date).toTimeString().split(":");
  return `${h}:${m}`;
};

const Title = ({ children }) => <h1 className="font-bold text-white text-xl p-4">{children}</h1>;

const List = ({ children }) => <ol data-testid="appointments-list">{children} </ol>;

const ListItem = ({ appointment, selected, onClick }) => (
  <li
    key={appointment.startsAt}
    data-testid="appointment-list-item"
    className={`m-4 text-white ${selected ? "border-b border-white" : ""}`}
  >
    <button type="button" className="w-full text-left focus:outline-none" onClick={onClick}>
      {dateToHHMM(appointment.startsAt)}
    </button>
  </li>
);

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div data-testid="appointmentsDayView" className="h-screen p-4">
      {appointments.length ? (
        <div className="flex flex-col h-full">
          <div className="flex flex-row h-full">
            <div className="flex flex-col w-1/6 bg-purple-400">
              <Title>Citas de hoy</Title>
              <List>
                {appointments.map((appointment, i) => (
                  <ListItem
                    key={appointment.startsAt}
                    appointment={appointment}
                    selected={i === selectedAppointment}
                    onClick={() => setSelectedAppointment(i)}
                  />
                ))}
              </List>
            </div>
            <div className="h-full flex-1  bg-blue-500">
              <Title>Cita seleccionada</Title>
              <div data-testid="selected-appointment">
                <Appointment {...appointments[selectedAppointment]} />
              </div>
            </div>
          </div>
          <CustomerForm />
        </div>
      ) : (
        <p data-testid="no-appointments-message">There are no appointments scheduled for today.</p>
      )}
    </div>
  );
};
