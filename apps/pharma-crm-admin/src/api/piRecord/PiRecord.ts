import { Quotation } from "../quotation/Quotation";

export type PiRecord = {
  createdAt: Date;
  date: Date | null;
  id: string;
  issuedBy: string | null;
  quotation?: Quotation | null;
  updatedAt: Date;
};
