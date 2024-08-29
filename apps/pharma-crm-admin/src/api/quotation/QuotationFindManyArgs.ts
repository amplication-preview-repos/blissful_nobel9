import { QuotationWhereInput } from "./QuotationWhereInput";
import { QuotationOrderByInput } from "./QuotationOrderByInput";

export type QuotationFindManyArgs = {
  where?: QuotationWhereInput;
  orderBy?: Array<QuotationOrderByInput>;
  skip?: number;
  take?: number;
};
