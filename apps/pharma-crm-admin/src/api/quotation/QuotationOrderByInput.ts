import { SortOrder } from "../../util/SortOrder";

export type QuotationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  quotedPrice?: SortOrder;
  updatedAt?: SortOrder;
  validUntil?: SortOrder;
};
