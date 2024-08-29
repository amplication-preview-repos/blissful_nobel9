import { EmployeeSalaryWhereInput } from "./EmployeeSalaryWhereInput";
import { EmployeeSalaryOrderByInput } from "./EmployeeSalaryOrderByInput";

export type EmployeeSalaryFindManyArgs = {
  where?: EmployeeSalaryWhereInput;
  orderBy?: Array<EmployeeSalaryOrderByInput>;
  skip?: number;
  take?: number;
};
