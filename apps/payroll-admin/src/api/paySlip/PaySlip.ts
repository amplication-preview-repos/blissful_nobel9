import { PayrollRecord } from "../payrollRecord/PayrollRecord";

export type PaySlip = {
  createdAt: Date;
  employee: string | null;
  id: string;
  issuedAt: Date | null;
  payrollRecord?: PayrollRecord | null;
  updatedAt: Date;
};
