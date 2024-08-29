import { EmployeeUpdateManyWithoutRolesInput } from "./EmployeeUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutRolesInput;
  name?: string | null;
};
