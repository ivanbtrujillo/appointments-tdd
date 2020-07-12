import React from "react";

export const getDailyTimeSlots = ({ opensAt, closesAt }) => {
  const totalSlots = closesAt - opensAt;
  return Array.from({ length: totalSlots }).map((_, index) => {
    const hour = opensAt + index;
    const date = new Date().setHours(hour, 0, 0, 0);
    return new Date(date);
  });
};

export const toTimeString = (timeStamp) => new Date(timeStamp).toTimeString().substring(0, 5);

export const BookingCalendar = ({ opensAt = 8, closesAt = 18 }) => {
  const timeSlots = getDailyTimeSlots({ opensAt, closesAt }).map(toTimeString);

  return (
    <table data-testid="booking-calendar">
      <thead data-testid="booking-calendar-header">
        <tr>
          <th></th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábado</th>
          <th>Domingo</th>
        </tr>
      </thead>
      <tbody data-testid="booking-calendar-body">
        {timeSlots.map((timeSlot) => (
          <tr key={timeSlot}>
            <th data-testid="time">{timeSlot}</th>
            <td>
              <input className="border border-gray-200" data-testid="slot"></input>
            </td>
            <td>
              <input className="border border-gray-200" data-testid="slot"></input>
            </td>
            <td>
              <input className="border border-gray-200" data-testid="slot"></input>
            </td>
            <td>
              <input className="border border-gray-200" data-testid="slot"></input>
            </td>
            <td>
              <input className="border border-gray-200" data-testid="slot"></input>
            </td>
            <td>
              <input className="border border-gray-200" data-testid="slot"></input>
            </td>
            <td>
              <input className="border border-gray-200" data-testid="slot"></input>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
