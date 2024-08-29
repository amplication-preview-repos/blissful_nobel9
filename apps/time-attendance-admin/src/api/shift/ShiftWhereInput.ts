import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ShiftWhereInput = {
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
};
