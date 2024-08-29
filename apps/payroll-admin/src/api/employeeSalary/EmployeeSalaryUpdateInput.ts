import { PayrollRecordUpdateManyWithoutEmployeeSalariesInput } from "./PayrollRecordUpdateManyWithoutEmployeeSalariesInput";

export type EmployeeSalaryUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  employee?: string | null;
  payrollRecords?: PayrollRecordUpdateManyWithoutEmployeeSalariesInput;
};
