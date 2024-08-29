import { EmployeeEngagementWhereInput } from "./EmployeeEngagementWhereInput";
import { EmployeeEngagementOrderByInput } from "./EmployeeEngagementOrderByInput";

export type EmployeeEngagementFindManyArgs = {
  where?: EmployeeEngagementWhereInput;
  orderBy?: Array<EmployeeEngagementOrderByInput>;
  skip?: number;
  take?: number;
};
