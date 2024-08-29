import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FaqWhereInput = {
  answer?: StringNullableFilter;
  category?: StringNullableFilter;
  id?: StringFilter;
  question?: StringNullableFilter;
};
