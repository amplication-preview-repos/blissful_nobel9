import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  addedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
