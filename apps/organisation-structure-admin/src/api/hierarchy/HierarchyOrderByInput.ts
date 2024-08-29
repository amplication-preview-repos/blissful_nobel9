import { SortOrder } from "../../util/SortOrder";

export type HierarchyOrderByInput = {
  createdAt?: SortOrder;
  employee?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  supervisor?: SortOrder;
  updatedAt?: SortOrder;
};
