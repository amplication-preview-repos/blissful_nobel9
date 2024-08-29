import { EmployeeSalary as TEmployeeSalary } from "../api/employeeSalary/EmployeeSalary";

export const EMPLOYEESALARY_TITLE_FIELD = "employee";

export const EmployeeSalaryTitle = (record: TEmployeeSalary): string => {
  return record.employee?.toString() || String(record.id);
};
