import { Employee } from "../employee/Employee";

export type Department = {
  createdAt: Date;
  description: string | null;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
