import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeSalaryWhereUniqueInput } from "../employeeSalary/EmployeeSalaryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaySlipListRelationFilter } from "../paySlip/PaySlipListRelationFilter";

export type PayrollRecordWhereInput = {
  date?: DateTimeNullableFilter;
  employeeSalary?: EmployeeSalaryWhereUniqueInput;
  id?: StringFilter;
  paySlips?: PaySlipListRelationFilter;
};
