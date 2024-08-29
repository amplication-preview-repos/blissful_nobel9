import { SortOrder } from "../../util/SortOrder";

export type PaySlipOrderByInput = {
  createdAt?: SortOrder;
  employee?: SortOrder;
  id?: SortOrder;
  issuedAt?: SortOrder;
  payrollRecordId?: SortOrder;
  updatedAt?: SortOrder;
};
