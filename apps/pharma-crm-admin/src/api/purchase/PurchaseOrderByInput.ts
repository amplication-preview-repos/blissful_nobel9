import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  supplier?: SortOrder;
  updatedAt?: SortOrder;
};
