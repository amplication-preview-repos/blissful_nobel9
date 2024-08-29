import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupportTicketWhereInput = {
  assignedTo?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
