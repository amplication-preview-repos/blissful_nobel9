import { Client } from "../client/Client";

export type Appointment = {
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  details: string | null;
  id: string;
  updatedAt: Date;
};
