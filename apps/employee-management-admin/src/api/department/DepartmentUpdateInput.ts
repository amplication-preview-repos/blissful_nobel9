import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
  name?: string | null;
};
