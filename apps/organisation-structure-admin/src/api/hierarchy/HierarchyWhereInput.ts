import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type HierarchyWhereInput = {
  employee?: StringNullableFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  supervisor?: StringNullableFilter;
};
