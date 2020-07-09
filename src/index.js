import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { AppointmentsDayView } from "./components/AppointmentsDayView/AppointmentsDayView.jsx";
import { mockAppointments } from "./mock/appointments.mock";

ReactDOM.render(
  <AppointmentsDayView appointments={mockAppointments} />,
  document.getElementById("root")
);
