import { EmployeeCreateNestedManyWithoutRolesInput } from "./EmployeeCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutRolesInput;
  name?: string | null;
};
