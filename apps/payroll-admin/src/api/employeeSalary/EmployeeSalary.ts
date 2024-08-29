import { PayrollRecord } from "../payrollRecord/PayrollRecord";

export type EmployeeSalary = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  employee: string | null;
  id: string;
  payrollRecords?: Array<PayrollRecord>;
  updatedAt: Date;
};
