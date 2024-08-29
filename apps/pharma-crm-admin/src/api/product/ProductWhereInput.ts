import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { QuotationListRelationFilter } from "../quotation/QuotationListRelationFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  purchases?: PurchaseListRelationFilter;
  quotations?: QuotationListRelationFilter;
  sales?: SaleListRelationFilter;
};
