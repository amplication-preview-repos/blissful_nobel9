import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttendanceRecordWhereInput = {
  date?: DateTimeNullableFilter;
  employee?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
