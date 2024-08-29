import { Quotation as TQuotation } from "../api/quotation/Quotation";

export const QUOTATION_TITLE_FIELD = "id";

export const QuotationTitle = (record: TQuotation): string => {
  return record.id?.toString() || String(record.id);
};
