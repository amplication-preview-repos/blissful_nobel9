import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RecruitmentWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  position?: StringNullableFilter;
  status?: "Option1";
};
