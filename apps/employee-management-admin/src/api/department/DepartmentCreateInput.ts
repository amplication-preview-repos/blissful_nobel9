import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
  name?: string | null;
};
