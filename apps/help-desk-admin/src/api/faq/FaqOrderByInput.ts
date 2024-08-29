import { SortOrder } from "../../util/SortOrder";

export type FaqOrderByInput = {
  answer?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
