import { QuotationWhereUniqueInput } from "../quotation/QuotationWhereUniqueInput";

export type PiRecordCreateInput = {
  date?: Date | null;
  issuedBy?: string | null;
  quotation?: QuotationWhereUniqueInput | null;
};
