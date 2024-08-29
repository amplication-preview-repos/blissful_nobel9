import { PiRecordCreateNestedManyWithoutQuotationsInput } from "./PiRecordCreateNestedManyWithoutQuotationsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type QuotationCreateInput = {
  piRecords?: PiRecordCreateNestedManyWithoutQuotationsInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  quotedPrice?: number | null;
  validUntil?: Date | null;
};
