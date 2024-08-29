import { Appointment } from "../appointment/Appointment";
import { Sale } from "../sale/Sale";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  sales?: Array<Sale>;
  updatedAt: Date;
};
