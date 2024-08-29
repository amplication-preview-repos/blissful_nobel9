import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  role?: RoleWhereUniqueInput | null;
};
