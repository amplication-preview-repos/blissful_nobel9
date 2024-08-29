import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QuotationWhereUniqueInput } from "../quotation/QuotationWhereUniqueInput";

export type PiRecordWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  issuedBy?: StringNullableFilter;
  quotation?: QuotationWhereUniqueInput;
};
