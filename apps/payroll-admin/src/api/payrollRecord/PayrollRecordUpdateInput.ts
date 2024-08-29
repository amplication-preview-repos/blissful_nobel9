import { EmployeeSalaryWhereUniqueInput } from "../employeeSalary/EmployeeSalaryWhereUniqueInput";
import { PaySlipUpdateManyWithoutPayrollRecordsInput } from "./PaySlipUpdateManyWithoutPayrollRecordsInput";

export type PayrollRecordUpdateInput = {
  date?: Date | null;
  employeeSalary?: EmployeeSalaryWhereUniqueInput | null;
  paySlips?: PaySlipUpdateManyWithoutPayrollRecordsInput;
};
