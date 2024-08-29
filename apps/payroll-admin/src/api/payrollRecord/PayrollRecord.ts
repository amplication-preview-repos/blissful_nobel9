import { EmployeeSalary } from "../employeeSalary/EmployeeSalary";
import { PaySlip } from "../paySlip/PaySlip";

export type PayrollRecord = {
  createdAt: Date;
  date: Date | null;
  employeeSalary?: EmployeeSalary | null;
  id: string;
  paySlips?: Array<PaySlip>;
  updatedAt: Date;
};
