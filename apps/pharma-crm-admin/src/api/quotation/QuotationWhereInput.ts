import { StringFilter } from "../../util/StringFilter";
import { PiRecordListRelationFilter } from "../piRecord/PiRecordListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type QuotationWhereInput = {
  id?: StringFilter;
  piRecords?: PiRecordListRelationFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  quotedPrice?: FloatNullableFilter;
  validUntil?: DateTimeNullableFilter;
};
