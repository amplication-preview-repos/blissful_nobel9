import { QuotationWhereUniqueInput } from "../quotation/QuotationWhereUniqueInput";

export type PiRecordUpdateInput = {
  date?: Date | null;
  issuedBy?: string | null;
  quotation?: QuotationWhereUniqueInput | null;
};
