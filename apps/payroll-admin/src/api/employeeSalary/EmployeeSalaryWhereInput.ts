import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PayrollRecordListRelationFilter } from "../payrollRecord/PayrollRecordListRelationFilter";

export type EmployeeSalaryWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  employee?: StringNullableFilter;
  id?: StringFilter;
  payrollRecords?: PayrollRecordListRelationFilter;
};
