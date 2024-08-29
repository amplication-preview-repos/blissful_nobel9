import { PiRecordUpdateManyWithoutQuotationsInput } from "./PiRecordUpdateManyWithoutQuotationsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type QuotationUpdateInput = {
  piRecords?: PiRecordUpdateManyWithoutQuotationsInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  quotedPrice?: number | null;
  validUntil?: Date | null;
};
