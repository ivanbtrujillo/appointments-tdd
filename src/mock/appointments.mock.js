const today = new Date();

const at = hours => today.setHours(hours, 0);

export const mockAppointments = [
  {
    startsAt: at(9),
    customer: {
      firstName: "Charlie",
      lastName: "Johnson",
      service: "hair cut",
      stylist: "Ana White",
      phoneNumber: 666888555,
      notes: "Vip"
    }
  },
  {
    startsAt: at(10),
    customer: { firstName: "Frakie" }
  },
  {
    startsAt: at(11),
    customer: { firstName: "Cassei" }
  },
  {
    startsAt: at(12),
    customer: { firstName: "Ashley" }
  },
  {
    startsAt: at(13),
    customer: { firstName: "Jordan" }
  },
  {
    startsAt: at(14),
    customer: { firstName: "Jay" }
  },
  {
    startsAt: at(15),
    customer: { firstName: "Alex" }
  },
  {
    startsAt: at(16),
    customer: { firstName: "Jules" }
  },
  {
    startsAt: at(17),
    customer: { firstName: "Steve" }
  }
];
