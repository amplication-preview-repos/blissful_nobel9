import { SortOrder } from "../../util/SortOrder";

export type AttendanceRecordOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  employee?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
