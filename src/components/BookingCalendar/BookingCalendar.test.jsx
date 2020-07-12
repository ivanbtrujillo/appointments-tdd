import { render } from "@testing-library/react";
import React from "react";
import { BookingCalendar, getDailyTimeSlots, toTimeString } from "./BookingCalendar";
describe("<BookingCalendar />", () => {
  it("renders a table", () => {
    const { getByTestId } = render(<BookingCalendar />);
    expect(getByTestId("booking-calendar").nodeName).toBe("TABLE");
  });
  it("shows a table head with all days in a week, leaving first in blank", () => {
    const { getByTestId } = render(<BookingCalendar />);
    const tableHeader = getByTestId("booking-calendar-header");
    const columnNodes = Array.from(tableHeader.firstChild.childNodes);

    const columns = columnNodes.map((column) => column.textContent);
    expect(columns).toEqual(["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]);
  });

  it("shows all available from 08:00 to 18:00 by default ", () => {
    const { queryAllByTestId } = render(<BookingCalendar />);
    const timesNodes = queryAllByTestId("time");
    const times = timesNodes.map((time) => time.textContent);
    expect(timesNodes.length).toEqual(10);
    expect(times).toEqual(["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]);
  });

  it("shows all available times based on when it opens and closes ", () => {
    const { queryAllByTestId } = render(<BookingCalendar opensAt={9} closesAt={19} />);
    const timesNodes = queryAllByTestId("time");
    const times = timesNodes.map((time) => time.textContent);
    expect(timesNodes.length).toEqual(10);
    expect(times).toEqual(["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]);
  });

  it("shows a radio button per each day and time", () => {
    const { queryAllByTestId } = render(<BookingCalendar opensAt={9} closesAt={19} />);
    const slotNodes = queryAllByTestId("slot");
    expect(slotNodes.length).toEqual(70);
  });

  describe("Daily Time Slots generator", () => {
    it("should generate timeStamps based on when the saloon opens and closes", () => {
      const opensAt = 9;
      const closesAt = 19;
      const slots = getDailyTimeSlots({ opensAt, closesAt });
      expect(slots.length).toBe(closesAt - opensAt);
      expect(slots[0].getHours()).toBe(9);
      expect(slots[1].getHours()).toBe(10);
      expect(slots[8].getHours()).toBe(17);
      expect(slots[9].getHours()).toBe(18);
    });

    it("should convert timestamps to HH:MM format", () => {
      const oneDigit = toTimeString(new Date().setHours(7, 0, 0, 0));
      expect(oneDigit).toBe("07:00");

      const twoDigits = toTimeString(new Date().setHours(16, 0, 0, 0));
      expect(twoDigits).toBe("16:00");
    });
  });
});
