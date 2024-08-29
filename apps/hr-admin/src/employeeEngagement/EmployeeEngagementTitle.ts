import { EmployeeEngagement as TEmployeeEngagement } from "../api/employeeEngagement/EmployeeEngagement";

export const EMPLOYEEENGAGEMENT_TITLE_FIELD = "activity";

export const EmployeeEngagementTitle = (
  record: TEmployeeEngagement
): string => {
  return record.activity?.toString() || String(record.id);
};
