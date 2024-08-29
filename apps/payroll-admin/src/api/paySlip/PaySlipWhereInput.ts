import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PayrollRecordWhereUniqueInput } from "../payrollRecord/PayrollRecordWhereUniqueInput";

export type PaySlipWhereInput = {
  employee?: StringNullableFilter;
  id?: StringFilter;
  issuedAt?: DateTimeNullableFilter;
  payrollRecord?: PayrollRecordWhereUniqueInput;
};
