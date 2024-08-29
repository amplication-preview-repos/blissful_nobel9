import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeEngagementWhereInput = {
  activity?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  employee?: StringNullableFilter;
  feedback?: StringNullableFilter;
  id?: StringFilter;
};
