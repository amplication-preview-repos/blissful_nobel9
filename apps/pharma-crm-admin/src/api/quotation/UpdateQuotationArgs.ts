import { QuotationWhereUniqueInput } from "./QuotationWhereUniqueInput";
import { QuotationUpdateInput } from "./QuotationUpdateInput";

export type UpdateQuotationArgs = {
  where: QuotationWhereUniqueInput;
  data: QuotationUpdateInput;
};
