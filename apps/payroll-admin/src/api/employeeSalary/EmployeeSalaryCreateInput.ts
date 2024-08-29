import { PayrollRecordCreateNestedManyWithoutEmployeeSalariesInput } from "./PayrollRecordCreateNestedManyWithoutEmployeeSalariesInput";

export type EmployeeSalaryCreateInput = {
  amount?: number | null;
  date?: Date | null;
  employee?: string | null;
  payrollRecords?: PayrollRecordCreateNestedManyWithoutEmployeeSalariesInput;
};
