import { SortOrder } from "../../util/SortOrder";

export type EmployeeSalaryOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  employee?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
