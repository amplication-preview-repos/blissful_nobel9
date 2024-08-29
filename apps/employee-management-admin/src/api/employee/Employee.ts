import { Department } from "../department/Department";
import { Role } from "../role/Role";

export type Employee = {
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  role?: Role | null;
  updatedAt: Date;
};
