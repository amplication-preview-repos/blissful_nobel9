import { EmployeeSalaryWhereUniqueInput } from "../employeeSalary/EmployeeSalaryWhereUniqueInput";
import { PaySlipCreateNestedManyWithoutPayrollRecordsInput } from "./PaySlipCreateNestedManyWithoutPayrollRecordsInput";

export type PayrollRecordCreateInput = {
  date?: Date | null;
  employeeSalary?: EmployeeSalaryWhereUniqueInput | null;
  paySlips?: PaySlipCreateNestedManyWithoutPayrollRecordsInput;
};
